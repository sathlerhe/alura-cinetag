import React from "react";

import styles from "./banner.module.css";

function Banner({ image }) {
  return (
    <div
      className={styles.capa}
      style={{
        backgroundImage: `url('/assets/banner-${image}.png')`,
      }}
    />
  );
}

export default Banner;
