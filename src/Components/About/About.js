import React from "react";

import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img
            src="https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg"
            alt="Morphy"
          />
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.title}>
          Spaceno10 is a full stack creative studio that has fun solving hard,
          business challenges.
        </p>
        <p className={styles.title}>
          Our company dives deep and immerses itself in your world, understands
          the challenges that affect your firm, and uses multiple creative
          techniques to crack a solution to a problem that you previously
          thought was unsolvable.
        </p>
        <p className={styles.title}>
          We are currently based out of India (Bangalore, Goa), Spain (Malaga),
          Singapore, and USA (San Francisco).
        </p>
      </div>
    </div>
  );
}

export default About;
