import React from "react";
import { Link } from "react-router-dom";
import styles from "./applink.module.scss";

const AppLink = ({ label, to }) => {
  return (
    <Link className={styles.appLink} to={to}>
      {label}
    </Link>
  );
};

export default AppLink;
