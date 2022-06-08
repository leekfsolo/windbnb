import React, { useState } from "react";

import { CardItem } from "./model";
import { ReactComponent as Star } from "../common/ui/assets/images/star.svg";
import item1 from "../common/ui/assets/images/1.jpg";
import item2 from "../common/ui/assets/images/2.jpg";
import item3 from "../common/ui/assets/images/3.jpg";
import item4 from "../common/ui/assets/images/4.jpg";
import item5 from "../common/ui/assets/images/5.jpg";
import item6 from "../common/ui/assets/images/6.jpg";

import styles from "./App.module.scss";

const App = () => {
  const [cardItems] = useState<Array<CardItem>>([
    {
      img: item1,
      tag: "super host",
      desc: "Entire apartment . 2 beds",
      rating: 4.4,
      title: "Stylist apartment in center of the city",
    },
    {
      img: item2,
      desc: "Private room",
      rating: 4.25,
      title: "Cozy, peaceful and private room with...",
    },
    {
      img: item3,
      desc: "Entire house",
      rating: 4.96,
      title: "Modern House in a remote area",
    },
    {
      img: item4,
      tag: "super host",
      desc: "Entire apartment . 2 beds",
      rating: 4.85,
      title: "Stylist room in design district ",
    },
    {
      img: item5,
      desc: "Private room",
      rating: 4.54,
      title: "Modern apartment close to nature",
    },
    {
      img: item6,
      desc: "Entire house",
      rating: 4.64,
      title: "House in a remote area",
    },
  ]);

  return (
    <>
      <div className={styles.headings}>
        <h1>Stays in Finland</h1>
        <div className={styles.amount}>
          <span>12+ stays</span>
        </div>
      </div>

      <div className={styles.content}>
        {cardItems.map((item) => (
          <section className={styles.card}>
            <div className={styles.card__img}>
              <img alt="" src={item.img} />
            </div>

            <div className={styles.card__content}>
              <div className={styles.card__info}>
                {item.tag && (
                  <div className={styles.card__tag}>
                    <span>{item.tag}</span>
                  </div>
                )}
                <div className={styles.card__desc}>
                  <span>{item.desc}</span>
                </div>
              </div>
              <div className={styles.card__rating}>
                <span>
                  <Star /> {item.rating}
                </span>
              </div>
            </div>

            <div className={styles.card__title}>
              <span>{item.title}</span>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default App;
