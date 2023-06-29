import React from "react";

import styles from "./Product.module.scss";

const cardDetails = [
  {
    image:
      "https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg",
    title: "0-1 product",
    desc: "we help develop new products using lean methodology and help achieve product market fit",
  },
  {
    image:
      "https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg",
    title: "New strategy",
    desc: "we work with firms and help them define their next phase of growth.",
  },
  {
    image:
      "https://assets.website-files.com/613f528b6c338d2716ac8cbd/6143214cdc0c03491ef95f8d_photo-4-p-800.jpeg",
    title: "Go-to-market",
    desc: "we help you grow and blitzscale to get to your next 100/1k/10k/100k consumers",
  },
];
function Products() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>WHAT WE WORK ON</p>

      <div className={styles.cards}>
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
  );
}

export default Products;
