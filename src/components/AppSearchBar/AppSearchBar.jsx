import AppIcon from "components/AppIcon/AppIcon";
import React from "react";
import styles from "./appsearchbar.module.scss";

const AppSearchBar = () => {
  return (
    <div className={styles.container}>
      <AppIcon icon="search" />
      <input type="text" placeholder="Search here..." />
    </div>
  );
};

export default AppSearchBar;
