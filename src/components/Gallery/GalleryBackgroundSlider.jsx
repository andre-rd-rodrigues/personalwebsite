import React from "react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import styles from "./gallery.module.scss";

const GalleryBackgroundSlider = ({ children, images }) => {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      className={styles.layer}
    >
      <div className={styles.container}>
        <div className={styles.background}>
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(#21212170, #21212170), url(${
                  process.env.PUBLIC_URL + src
                })`
              }}
            />
          ))}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </motion.div>
  );
};

export default GalleryBackgroundSlider;
