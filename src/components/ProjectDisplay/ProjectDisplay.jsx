import ImageZoomEffect from "components/ImageZoomEffect/ImageZoomEffect";
import React from "react";
import styles from "./projectdisplay.module.scss";

const ProjectDisplay = ({ src, label, href }) => {
  return (
    <a href={href} target="_" className={styles.container}>
      <ImageZoomEffect overlay height="350px" width="270px" src={src}>
        <h4>{label}</h4>
      </ImageZoomEffect>
    </a>
  );
};

export default ProjectDisplay;
