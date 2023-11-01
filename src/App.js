import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Menu from './Components/Menu';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Menu} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
