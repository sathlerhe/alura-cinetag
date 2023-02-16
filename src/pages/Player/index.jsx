import React from "react";
import { useParams } from "react-router-dom";

import Banner from "../../components/Banner";
import Title from "../../components/Title";

import videos from "../../json/db.json";
import NotFound from "../NotFound";

import styles from "./player.module.css";

function Player() {
  const { id } = useParams();

  const video = videos.find((video) => {
    return video.id === Number(id);
  });

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>

      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; fullscreen; clipboard-write"
        ></iframe>
      </section>
    </>
  );
}

export default Player;
