import React from "react";

import favoriteIcon from "./favorite.png";
import unfavoriteIcon from "./unfavorite.png";

import styles from "./Card.module.css";
import { useFavoriteContext } from "../../contexts/Favorites";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
  const { favorites, toggleFavorite } = useFavoriteContext();
  const isCardInFavorites = favorites.some((fav) => fav.id === id);
  const icon = isCardInFavorites ? unfavoriteIcon : favoriteIcon;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        onClick={() => toggleFavorite({ id, titulo, capa })}
        src={icon}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}

export default Card;
