import React from "react";
import { Link } from "react-router-dom";
import styles from "./applink.module.scss";

const AppLink = ({ label, to, className }) => {
  return (
    <Link className={`${styles.appLink} ${className}`} to={to}>
      {label}
    </Link>
  );
};

export default AppLink;
