import React, { useRef } from "react";

import styles from "./GetInTouch.module.scss";

function GetInTouch() {
  const spaceship = useRef();
  const containerRef = useRef();

  const handleMouseMove = (event) => {
    if (!spaceship.current || !containerRef.current) return;

    const x = event.clientX;
    const y = event.clientY;

    if (isNaN(x) || isNaN(y)) return;

    const dimensions = containerRef.current.getBoundingClientRect();

    const finalX = x - dimensions.left;
    const finalY = y - dimensions.top;
    spaceship.current.style.top = `${finalY}px`;
    spaceship.current.style.left = `${finalX}px`;

    if (finalY < 0 || finalY > dimensions.height)
      spaceship.current.style.transform = `translate(-30px,-30px) scale(0)`;
    else spaceship.current.style.transform = `translate(-30px,-30px) scale(1)`;
  };

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseLeave={() =>
        (spaceship.current.style.transform = "translate(-30px,-30px) scale(0)")
      }
      ref={containerRef}
    >
      <div className={styles.spaceship} ref={spaceship}>
        <div className={styles.inner}>🚀</div>
      </div>

      <p className={styles.heading}>
        Get in
        <span> touch </span>
      </p>
    </div>
  );
}

export default GetInTouch;
