import React, { FC, useRef } from "react";
import { ReactComponent as Search } from "../../../../assets/images/search.svg";

import styles from "./SearchBar.module.scss";

interface Props {
  isExpand: boolean;
  setIsExpand: (isExpand: boolean) => void;
  inputFocus: string;
  setInputFocus: (inputFocus: string) => void;
}

const SearchBar: FC<Props> = (props: Props) => {
  const { isExpand, setIsExpand, setInputFocus, inputFocus } = props;
  const locationRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLInputElement>(null);

  const inputFocusHandler = (input: string) => {
    setInputFocus(input);
    setIsExpand(true);
  };

  return (
    <div className={`${styles.searchBar} ${isExpand ? styles.expand : ""}`}>
      <div
        className={`${styles.searchLocation} ${
          inputFocus === "location" ? styles.active : ""
        }`}
      >
        {isExpand && <label htmlFor="location">Location</label>}
        <input
          type="text"
          name="location"
          id="location"
          defaultValue="Helsinki, Finland"
          placeholder="Add locations"
          onFocus={() => inputFocusHandler("location")}
          ref={locationRef}
        />
      </div>
      <div
        className={`${styles.searchGuests} ${
          inputFocus === "guests" ? styles.active : ""
        }`}
      >
        {isExpand && <label htmlFor="guests">Guests</label>}
        <input
          type="text"
          name="guests"
          id="guests"
          placeholder="Add guests"
          onFocus={() => inputFocusHandler("guests")}
          ref={guestsRef}
        />
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
