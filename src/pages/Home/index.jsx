import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

// import { Container } from './styles';

function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes.</h1>
      </Title>
      <Card
        id="1"
        title="asdfasdf"
        capa="https://thecatapi.com/api/images/get?format-src&type=png"
      />
      <Footer />
    </>
  );
}

export default Home;
