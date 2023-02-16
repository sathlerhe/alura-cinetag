import React from "react";

import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

import styles from "./Favorites.module.css";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {
  const { favorites } = useFavoriteContext();

  return (
    <>
      <Banner image="favoritos" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>

      <section className={styles.container}>
        {favorites.map((favorite) => (
          <Card {...favorite} key={favorite.id} />
        ))}
      </section>
    </>
  );
}

export default Favorites;
