import AppLink from "components/AppLink/AppLink";
import React from "react";
import styles from "./toparticle.module.scss";

const TopArticle = ({ article }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${article.image_src})` }}
      />
      <div className={styles.date}>
        <p>Lifestyle</p>
        <p>12, June 2022</p>
      </div>
      <h3>{article.title}</h3>
      <p className="article_description">{article.description}</p>
      <div className="text-end">
        <AppLink label="READ NOW" to="/" />
      </div>
    </div>
  );
};

export default TopArticle;
