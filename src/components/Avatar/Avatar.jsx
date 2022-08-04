import React from "react";
import styles from "./avatar.module.scss";

const Avatar = ({ src, size = 10 }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${src})`,
        width: `${size}vw`,
        height: `${size}vw`
      }}
    ></div>
  );
};

export default Avatar;
