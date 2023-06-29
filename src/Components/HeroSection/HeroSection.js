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
            <div className={styles.image}>
              <img
                src="https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg"
                alt="Morphy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
