import React, { useEffect, useRef } from "react";

import styles from "./horizontalScroller.module.scss";

const cardDetails = [
  {
    image:
      "https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg",
    title: "No bias",
    desc: "We listen without bias.",
  },
  {
    image:
      "https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg",
    title: "Insights first. Answers later.",
    desc: "We aim to uncover deep insights and human truths before jumping to solutions.",
  },
  {
    image:
      "https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg",
    title: "Movements, not campaigns",
    desc: "We strive to build movements (not campaigns) around products, brands, companies, people, causes, agendas",
  },
  {
    image:
      "https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg",
    title: "First principles thinking",
    desc: "We approach each project with a beginner mindset, and use a first principles approach to problem solving.",
  },
  {
    image:
      "https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg",
    title: "Complex, not complicated",
    desc: "The world is complex, not complicated. Our solutions are the same.",
  },
];
function HorizontalScroller() {
  const containerRef = useRef();
  const scrollerRef = useRef();
  const cardsRef = useRef();

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const dimensions = container.getBoundingClientRect();

    const top = dimensions.top;
    const height = dimensions.height;

    if (top > 0) {
      document.body.style.background = "#fff";
      return;
    }

    const scrolled = (Math.abs(top) / height) * 100;

    if (scrolled < 10 || scrolled > 74)
      document.body.style.background = "#ffffbf";
    else if (scrolled < 30 || scrolled > 67)
      document.body.style.background = "#ffff70";
    else document.body.style.background = "yellow";

    if (scrolled > 90) document.body.style.background = "#fff";

    const netScrolled = scrolled - 3;
    if (cardsRef.current && netScrolled > 0)
      cardsRef.current.style.transform = `translateX(-${netScrolled}%)`;

    if (scrollerRef.current)
      if (netScrolled > 85) scrollerRef.current.style.position = `static`;
      else scrollerRef.current.style.position = `sticky`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <p className={styles.heading}>Our Approach</p>

      <div className={styles.scroller} ref={scrollerRef}>
        <div className={styles.cards} ref={cardsRef}>
          {cardDetails.map((item, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.image}>
                <img src={item.image} alt={item.title} />
              </div>

              <p className={styles.title}>{item.title}</p>

              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroller;
