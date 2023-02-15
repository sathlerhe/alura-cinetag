import React from "react";
import { Link } from "react-router-dom";

import styles from "./headerLink.module.css";

function HeaderLink({ url, children }) {
  return (
    <Link className={styles.link} to={url}>
      {children}
    </Link>
  );
}

export default HeaderLink;
