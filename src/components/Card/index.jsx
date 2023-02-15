import React from "react";

import favoriteIcon from "./favorite.png";

import styles from "./Card.module.css";

function Card({ id, titulo, capa }) {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={favoriteIcon}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}

export default Card;
