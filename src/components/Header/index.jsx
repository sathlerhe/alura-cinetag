import React from "react";
import { Link } from "react-router-dom";

import HeaderLink from "../HeaderLink";

import logo from "./logo.png";

import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/">
        <img src={logo} alt="Cine Tag" />
      </Link>

      <nav>
        <HeaderLink url="/">Home</HeaderLink>
        <HeaderLink url="/favoritos">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
