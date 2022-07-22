import React from "react";
import styles from "./gallery.module.scss";

const GalleryBackgroundSlider = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={[styles.content]}>{children}</div>
    </div>
  );
};

export default GalleryBackgroundSlider;
