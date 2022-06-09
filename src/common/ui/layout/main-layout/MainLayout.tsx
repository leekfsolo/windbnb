import React, { FC, ReactNode, useState } from "react";
import Footer from "./footer";
import Header from "./header";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { children } = props;

  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <div
      className={`${styles.container} ${isExpand ? styles.expand : ""}`}
      onClick={() => setIsExpand(false)}
    >
      <Header isExpand={isExpand} setIsExpand={setIsExpand} />
      <main id={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
