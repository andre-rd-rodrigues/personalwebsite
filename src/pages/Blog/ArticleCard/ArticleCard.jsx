import React from "react";
import { fadeInVariant, motion } from "assets/motion/motionVariants";
import AppImage from "components/AppImage/AppImage";
import AppLink from "components/AppLink/AppLink";
import { Link } from "react-router-dom";
import { READ_MORE_LABEL } from "utils";
import { convertDate } from "utils/helpers/date";
import styles from "./articlecard.module.scss";

const ArticleCard = ({ article }) => {
  return (
    <motion.div variants={fadeInVariant} className={styles.container}>
      <div className={styles.wrapper}>
        <Link to={`/blog/article/${article.id}`}>
          <AppImage src={article.image_src} className={styles.image} />
          <div className={styles.subtitle}>
            <p>{article.category}</p>
            <p>{convertDate(article.date)}</p>
          </div>
          <div className={styles.body}>
            <h5>{article.title}</h5>
            <p>{article.description}</p>
          </div>
          <div className={styles.footer}>
            <AppLink
              label={READ_MORE_LABEL}
              to={`/blog/article/${article.id}`}
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
