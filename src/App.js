import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Menu from "./Components/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/new-order" element={<Menu />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
