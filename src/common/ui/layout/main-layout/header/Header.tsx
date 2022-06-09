import React, { FC, useState } from "react";

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
  const [inputFocus, setInputFocus] = useState<string>("location");

  const SearchBarComp = (
    <SearchBar
      isExpand={isExpand}
      setIsExpand={setIsExpand}
      inputFocus={inputFocus}
      setInputFocus={setInputFocus}
    />
  );

  return (
    <header className={styles.header}>
      <nav className={styles.logo}>
        <img src={Logo} alt="" />
      </nav>

      {isExpand ? (
        <Modal type="searchBar" inputFocus={inputFocus}>
          {SearchBarComp}
        </Modal>
      ) : (
        SearchBarComp
      )}
    </header>
  );
};

export default Header;
