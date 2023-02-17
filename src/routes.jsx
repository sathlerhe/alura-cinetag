import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./container/Layout";
import Favorites from "./pages/Favorites";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Player from "./pages/Player";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/:id" element={<Player />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
