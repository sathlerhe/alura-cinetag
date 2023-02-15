import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./container/Layout";
import Favorites from "./pages/Favorites";

import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
