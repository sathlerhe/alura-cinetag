import React from "react";

import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

import videos from "../../json/db.json";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes.</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
}

export default Home;
