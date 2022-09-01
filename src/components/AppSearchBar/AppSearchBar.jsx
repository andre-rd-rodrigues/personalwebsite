import React from "react";
import { useState } from "react";
import AppIcon from "components/AppIcon/AppIcon";
import styles from "./appsearchbar.module.scss";

const AppSearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchValue);
      }}
    >
      <AppIcon icon="search" size={19} role="button" type="submit" />
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default AppSearchBar;
