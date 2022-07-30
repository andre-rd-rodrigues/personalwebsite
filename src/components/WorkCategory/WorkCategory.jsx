import React from "react";
import { Link } from "react-router-dom";
import styles from "./workcategory.module.scss";

const WorkCategory = ({ name, order, src }) => {
  return (
    <Link to={`/works/${name.toLowerCase()}`} className={styles.container}>
      <div className={styles.imageWrapper}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${src})`
          }}
        />
      </div>
      <div className={styles.text}>
        <p>{order}</p>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default WorkCategory;
