import React from "react";
import ImageZoomEffect from "components/ImageZoomEffect/ImageZoomEffect";
import { Link } from "react-router-dom";
import styles from "./workcategory.module.scss";

const WorkCategory = ({ name, order, src }) => {
  return (
    <Link
      to={`/works/category?type=${name.toLowerCase()}`}
      className={styles.container}
    >
      <ImageZoomEffect height="40vw" maxHeight="300px" src={src} />
      <div className={styles.text}>
        <p>{order}</p>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default WorkCategory;
