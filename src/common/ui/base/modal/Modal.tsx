import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

interface Props {
  children: ReactNode;
  type: string;
}

const modalRoot = document.getElementById("modal");

const Modal: FC<Props> = (props: Props) => {
  const { children, type } = props;

  return modalRoot ? (
    createPortal(
      <div className={`${styles.modal} ${styles[type]}`}>{children}</div>,
      modalRoot
    )
  ) : (
    <div className={`${styles.modal} ${styles[type]}`}>{children}</div>
  );
};

export default Modal;
