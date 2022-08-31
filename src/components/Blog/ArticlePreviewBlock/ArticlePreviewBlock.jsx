import AppImage from "components/AppImage/AppImage";
import AppLink from "components/AppLink/AppLink";
import React from "react";
import { Link } from "react-router-dom";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import styles from "./articlepreviewblock.module.scss";

const ArticlePreviewBlock = ({ article }) => {
  return (
    <motion.div variants={fadeInVariant} className={styles.container}>
      <div className={styles.wrapper}>
        <Link to={`/blog/article?id=${article.id}`}>
          <AppImage src={article.image_src} className={styles.image} />
          <div className={styles.subtitle}>
            <p>{article.category}</p>
            <p>{article.date}</p>
          </div>
          <div className={styles.body}>
            <h5>{article.title}</h5>
            <p>{article.description}</p>
          </div>
          <div className={styles.footer}>
            <AppLink label="read now" to={`/${article.id}`} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticlePreviewBlock;