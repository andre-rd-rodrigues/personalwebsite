import React from "react";
import styles from "./imagezoomeffect.module.scss";

const ImageZoomEffect = ({
  src,
  style,
  height = "160%",
  width = "100%",
  children,
  overlay
}) => {
  return (
    <div style={{ ...style, height, width }} className={styles.wrapper}>
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
