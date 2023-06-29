import React from "react";

import Navbar from "Components/Navbar/Navbar";

import styles from "./HeroSection.module.scss";

function HeroSection() {
  const underline = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="404"
      height="40"
      viewBox="0 0 404 40"
      fill="none"
    >
      <path d="M1 37L403 3" stroke="#EDFF32" stroke-width="6" />
    </svg>
  );

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.left}>
            <p className={styles.heading}>
              Creative studio solving
              <span className={styles.underline}>
                {" "}
                hard
                {underline}
              </span>
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
