import React from "react";
import { containerVariant } from "assets/motion/motionVariants";
import colors from "assets/styles/_mixins.scss";
import { motion } from "framer-motion";
import styles from "./pagecontainer.module.scss";

const PageContainer = ({
  children,
  bgColor = "dark",
  color = "white",
  className
}) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ backgroundColor: colors[bgColor], color: colors[color] }}
    >
      <motion.div
        variants={containerVariant}
        whileInView="visible"
        initial="hidden"
        className={styles.wrapper}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageContainer;
