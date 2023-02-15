import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
