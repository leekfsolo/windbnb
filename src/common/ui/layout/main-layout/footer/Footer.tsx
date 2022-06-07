import React from "react";

import styles from "../MainLayout.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        created by <span className={styles.username}>username</span> -
        devChallenges.io
      </span>
    </footer>
  );
};

export default Footer;
