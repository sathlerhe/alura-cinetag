import React from "react";

import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

import styles from "./Favorites.module.css";

function Favorites() {
  return (
    <>
      <Banner image="favoritos" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>

      <section className={styles.container}>
        <Card id="1" titulo="asdfa" capa="sae" />
      </section>
    </>
  );
}

export default Favorites;
