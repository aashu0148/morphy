import React, { useEffect, useRef } from "react";

import styles from "./About.module.scss";

function About({
  heading = "",
  image = "",
  texts = [],
  flip = false,
  changeColorWhenInFocus = false,
}) {
  const containerRef = useRef();

  const handleScroll = () => {
    if (!changeColorWhenInFocus) return;

    const container = containerRef.current;
    if (!container) return;

    const dimensions = container.getBoundingClientRect();

    const top = dimensions.top;
    const height = dimensions.height;

    if (top > 0) {
      if (top > 350 && top < 500) {
        document.body.style.background = "#fff";
      } else if (top < 350) document.body.style.background = "#FCEB4E";
      return;
    }

    const scrolled = (Math.abs(top) / height) * 100;

    document.body.style.background = "#FCEB4E";

    if (scrolled > 50) document.body.style.background = "#fff";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.containerOuter} ref={containerRef}>
      {heading && <p className={styles.heading}>{heading}</p>}

      <div className={`${styles.container} ${flip ? styles.reverse : ""}`}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={image} alt="Morphy" />
          </div>
        </div>
        <div className={styles.right}>
          {texts.map((item) => (
            <p className={styles.title} key={item}>
              {item}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
