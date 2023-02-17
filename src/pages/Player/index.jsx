import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Banner from "../../components/Banner";
import Title from "../../components/Title";

import NotFound from "../NotFound";

import styles from "./Player.module.css";

function Player() {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetVideo = async () => {
      setLoading(true);
      await fetch(
        `https://my-json-server.typicode.com/sathlerhe/cinetag-api/videos?id=${id}`
      )
        .then((res) => res.json())
        .then((data) => setVideo(...data));

      setLoading(false)
    };

    handleGetVideo();
  }, []);

  if (!video && !loading) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>

      <section className={styles.container}>
        {loading ? (
          <div className={styles.loaderParent}>
            <div className={styles.loader}></div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            allow="accelerometer; autoplay; fullscreen; clipboard-write"
          ></iframe>
        )}
      </section>
    </>
  );
}

export default Player;
