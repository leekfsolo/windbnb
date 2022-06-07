import React, { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
