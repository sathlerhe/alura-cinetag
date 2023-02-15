import React from "react";

import styles from "./title.module.css";

function Title({ children }) {
  return <div className={styles.texto}>{children}</div>;
}

export default Title;
