import AppButton from "components/AppButton/AppButton";
import React from "react";
import ArticlePreviewBlock from "../ArticlePreviewBlock/ArticlePreviewBlock";
import styles from "./articlesgrid.module.scss";

const ArticlesGrid = ({ articles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {articles?.map((article) => (
          <ArticlePreviewBlock article={article} />
        ))}
      </div>
      <AppButton label="load more" />
    </div>
  );
};

export default ArticlesGrid;
