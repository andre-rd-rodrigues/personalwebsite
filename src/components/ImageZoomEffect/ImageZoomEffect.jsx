import React from "react";
import styles from "./imagezoomeffect.module.scss";

const ImageZoomEffect = ({
  src,
  style,
  height = "100%",
  width = "100%",
  children,
  overlay,
  maxHeight
}) => {
  return (
    <div
      style={{ ...style, height, width, maxHeight }}
      className={`${
        window.innerWidth >= 576 ? styles.wrapper : styles.wrapperMobile
      }`}
    >
      <div
        className={`${styles.image} ${overlay && styles.overlay}`}
        style={{
          backgroundImage: `url(${src})`
        }}
      />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default ImageZoomEffect;
