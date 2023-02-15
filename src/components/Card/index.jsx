import React from "react";

import favoriteIcon from "./favorite.png";

import styles from "./Card.module.css";

function Card({ id, title, capa }) {
  return (
    <div className={styles.container}>
      <img src={capa} alt={title} className={styles.capa} />
      <h2>{title}</h2>
      <img
        src={favoriteIcon}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}

export default Card;
