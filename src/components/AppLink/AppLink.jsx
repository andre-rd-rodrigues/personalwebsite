import React from "react";
import { Link } from "react-router-dom";
import styles from "./applink.module.scss";

const AppLink = ({ label, to }) => {
  const getStyle = () => {
    if (label.toLowerCase() === "read now")
      return `${styles.appLink} ${styles.readNow}`;

    return `${styles.appLink}`;
  };

  return (
    <Link className={getStyle()} to={to}>
      {label}
    </Link>
  );
};

export default AppLink;
