import React from "react";
import styles from "./imagezoomeffect.module.scss";
import variables from "assets/styles/_mixins.scss";

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
        window.innerWidth > variables.mobile_breaking_point
          ? styles.wrapper
          : null
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
