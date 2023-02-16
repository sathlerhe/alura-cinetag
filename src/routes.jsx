import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./container/Layout";
import { FavoritesProvider } from "./contexts/Favorites";
import Favorites from "./pages/Favorites";

import Home from "./pages/Home";
import Player from "./pages/Player";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/:id" element={<Player />} />
          </Routes>
        </FavoritesProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
