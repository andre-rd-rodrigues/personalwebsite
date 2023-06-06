import React from "react";
import cv from "assets/docs/cv.pdf";
import styles from "./downloadcvbutton.module.scss";

const DownloadCVButton = ({ className }) => {
  return (
    <div className={className}>
      <a className={styles.container} href={cv} download>
        DOWNLOAD CV
      </a>
    </div>
  );
};

export default DownloadCVButton;
