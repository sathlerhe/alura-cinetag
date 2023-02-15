import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

// import { Container } from './styles';

function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Footer />
    </>
  );
}

export default Home;
