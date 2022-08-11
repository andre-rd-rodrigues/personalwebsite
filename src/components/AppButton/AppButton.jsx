import React from "react";
import styles from "./appbutton.module.scss";

const AppButton = ({ label }) => {
  return <button className={styles.container}>{label}</button>;
};

export default AppButton;
