import React from "react";

import Navbar from "Components/Navbar/Navbar";

import styles from "./HeroSection.module.scss";

function HeroSection() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.left}>
            <p className={styles.heading}>
              Creative studio solving
              <span> hard </span>
              business challenges
            </p>
          </div>

          <div className={styles.right}>
            <div className={`${styles.floating} ${styles.image}`}>
              <img src="/astronaut.png" alt="Morphy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
