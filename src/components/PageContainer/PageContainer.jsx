import React from "react";
import styles from "./pagecontainer.module.scss";
import colors from "assets/styles/_mixins.scss";

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
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default PageContainer;
