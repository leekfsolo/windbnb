import React, { FC, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import useWindowSize from "../../../../hooks/useWindowSize";

import { ReactComponent as Location } from "../../assets/images/location.svg";
import { ReactComponent as Close } from "../../assets/images/close.svg";

import styles from "./Modal.module.scss";

interface Props {
  children: ReactNode;
  type: string;
  inputFocus: string;
  setIsExpand: (isExpand: boolean) => void;
}

const modalRoot = document.getElementById("modal");

const Modal: FC<Props> = (props: Props) => {
  const { children, type, inputFocus, setIsExpand } = props;
  const [adults, setAdults] = useState<number>(0);
  const [child, setChild] = useState<number>(0);
  const { width } = useWindowSize();
  const [locations] = useState<Array<string>>([
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ]);
  const is_XS_size = width <= 500;

  const decrementHandler = (type: string) => {
    if (type === "adults" && adults > 0) setAdults(adults - 1);
    if (type === "child" && child > 0) setChild(child - 1);
  };

  const incrementHandler = (type: string) => {
    if (type === "adults") setAdults(adults + 1);
    else setChild(child + 1);
  };

  return modalRoot ? (
    createPortal(
      <div
        className={`${styles.modal} ${styles[type]}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {is_XS_size && (
          <div className={styles.topBar}>
            <p>Edit your search</p>
            <Close onClick={() => setIsExpand(false)} />
          </div>
        )}
        <div>{children}</div>
        <div className={styles.content}>
          <div
            className={`${styles.content__location} ${
              inputFocus === "location" ? styles.active : ""
            } ${is_XS_size && inputFocus === "location" ? "" : styles.hidden}`}
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
            } ${is_XS_size && inputFocus === "guests" ? "" : styles.hidden}`}
          >
            <div className={styles.adults}>
              <h2>Adults</h2>
              <p>Ages 13 or above</p>
              <div className={styles.counter}>
                <button
                  className={styles.decrement}
                  onClick={() => decrementHandler("adults")}
                >
                  -
                </button>
                <span>{adults}</span>
                <button
                  className={styles.increment}
                  onClick={() => incrementHandler("adults")}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.children}>
              <h2>Children</h2>
              <p>Ages 2-12</p>
              <div className={styles.counter}>
                <button
                  className={styles.decrement}
                  onClick={() => decrementHandler("child")}
                >
                  -
                </button>
                <span>{child}</span>
                <button
                  className={styles.increment}
                  onClick={() => incrementHandler("child")}
                >
                  +
                </button>
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
