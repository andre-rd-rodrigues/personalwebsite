import React from "react";
import { Icon } from "@iconify/react";
import styles from "./scroll.module.scss";

const Scroll = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <img
        alt="Scroll right"
        src={`${process.env.PUBLIC_URL}/images/scroll.png`}
      />
      <Icon icon="ph:arrow-right-thin" style={{ fontSize: "30px" }} />
    </div>
  );
};

export default Scroll;
