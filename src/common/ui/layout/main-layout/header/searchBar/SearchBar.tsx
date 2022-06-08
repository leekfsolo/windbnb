import React, { FC } from "react";
import { ReactComponent as Search } from "../../../../assets/images/search.svg";

import styles from "./SearchBar.module.scss";

interface Props {
  isExpand: boolean;
  setIsExpand: (isExpand: boolean) => void;
}

const SearchBar: FC<Props> = (props: Props) => {
  const { isExpand, setIsExpand } = props;

  return (
    <div
      className={`${styles.searchBar} ${isExpand ? styles.expand : ""}`}
      onClick={() => setIsExpand(false)}
    >
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
  );
};

export default SearchBar;
