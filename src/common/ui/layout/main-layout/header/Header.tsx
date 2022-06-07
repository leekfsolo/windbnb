import React, { useState } from "react";

import { ReactComponent as Search } from "../../../assets/images/search.svg";
import Logo from "../../../assets/images/logo.png";
import styles from "../MainLayout.module.scss";

const Header = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <nav className={styles.logo}>
        <img src={Logo} alt="" />
      </nav>

      <div className={styles.searchBar} onClick={() => setIsExpand(false)}>
        <div className={styles.searchLocation}>
          <input
            type="text"
            name="location"
            defaultValue="Helsinki, Finland"
            placeholder="Add locations"
          />
        </div>
        <div className={styles.searchGuests}>
          <input type="text" name="guests" placeholder="Add guests" />
        </div>
        <div className={styles.searchBtn}>
          <button>
            <span>
              <Search />
            </span>
            {isExpand ? <span>Search</span> : ""}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
