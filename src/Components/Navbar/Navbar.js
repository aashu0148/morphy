import React from "react";

import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>Morphy</p>
      </div>

      <div className={styles.links}>
        <a className={styles.link}>Home</a>
        <a className={styles.link}>About</a>
        <a className={styles.link}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
