import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { FavoritesProvider } from "../../contexts/Favorites";

function Layout({ children }) {
  return (
    <>
      <Header />
      <FavoritesProvider>
        <Container>{children}</Container>
      </FavoritesProvider>
      <Footer />
    </>
  );
}

export default Layout;
