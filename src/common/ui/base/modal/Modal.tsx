import React, { FC, ReactNode, useState } from "react";
import { createPortal } from "react-dom";

import { ReactComponent as Location } from "../../assets/images/location.svg";

import styles from "./Modal.module.scss";

interface Props {
  children: ReactNode;
  type: string;
  inputFocus: string;
}

const modalRoot = document.getElementById("modal");

const Modal: FC<Props> = (props: Props) => {
  const { children, type, inputFocus } = props;

  const [locations] = useState<Array<string>>([
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ]);

  return modalRoot ? (
    createPortal(
      <div
        className={`${styles.modal} ${styles[type]}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>{children}</div>
        <div className={styles.content}>
          <div
            className={`${styles.content__location} ${
              inputFocus === "location" ? styles.active : ""
            }`}
          >
            <ul>
              {locations.map((location, idx) => (
                <li key={idx}>
                  <Location />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${styles.content__guests} ${
              inputFocus === "guests" ? styles.active : ""
            }`}
          >
            <div className={styles.adults}>
              <h2>Adults</h2>
              <p>Ages 13 or above</p>
              <div className={styles.counter}>
                <button className={styles.decrement}>-</button>
                <span>0</span>
                <button className={styles.increment}>+</button>
              </div>
            </div>
            <div className={styles.children}>
              <h2>Children</h2>
              <p>Ages 2-12</p>
              <div className={styles.counter}>
                <button className={styles.decrement}>-</button>
                <span>0</span>
                <button className={styles.increment}>+</button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>,
      modalRoot
    )
  ) : (
    <div className={`${styles.modal} ${styles[type]}`}>{children}</div>
  );
};

export default Modal;
