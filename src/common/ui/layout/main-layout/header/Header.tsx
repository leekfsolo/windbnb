import React, { FC } from "react";

import Logo from "../../../assets/images/logo.png";
import Modal from "../../../base/modal";
import styles from "../MainLayout.module.scss";
import SearchBar from "./searchBar/SearchBar";

interface Props {
  isExpand: boolean;
  setIsExpand: (isExpand: boolean) => void;
}

const Header: FC<Props> = (props: Props) => {
  const { isExpand, setIsExpand } = props;

  return (
    <header className={styles.header}>
      <nav className={styles.logo}>
        <img src={Logo} alt="" />
      </nav>

      {isExpand ? (
        <Modal type="searchBar">
          <SearchBar isExpand={isExpand} setIsExpand={setIsExpand} />
        </Modal>
      ) : (
        <SearchBar isExpand={isExpand} setIsExpand={setIsExpand} />
      )}
    </header>
  );
};

export default Header;
