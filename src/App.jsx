import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import IndexUsuarios from 'pages/usuario/index';
import 'styles/globals.css';
import 'styles/table.css'
import EditarUsuario from 'pages/usuario/editar';


// import PrivateRoute from 'components/PrivateRoute';
/* const httpLink = createHttpLink ({
  uri: 'https://prueba-graphql-paula.herokuapp.com/graphql'
}) */

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='' element={<Index />} />
              <Route path='/usuarios' element={<IndexUsuarios />} />
              <Route path='usuarios/editar/:_id' element={<EditarUsuario />} />
              <Route path='page2' element={<Page2 />} />
              <Route path='category1' element={<IndexCategory1 />} />
              <Route path='category1/page1' element={<Category1 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
