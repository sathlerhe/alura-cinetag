import React, { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

import styles from "./Home.module.css";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/sathlerhe/cinetag-api/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

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
