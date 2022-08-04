import ImageZoomEffect from "components/ImageZoomEffect/ImageZoomEffect";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./workcategory.module.scss";

const WorkCategory = ({ name, order, src }) => {
  return (
    <Link
      to={`/works/category?type=${name.toLowerCase()}`}
      className={styles.container}
    >
      <ImageZoomEffect height="20vw" src={src} />
      <div className={styles.text}>
        <p>{order}</p>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default WorkCategory;
