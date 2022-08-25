import AppButton from "components/AppButton/AppButton";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ArticlePreviewBlock from "../ArticlePreviewBlock/ArticlePreviewBlock";
import styles from "./articlesgrid.module.scss";
import {
  containerVariant,
  fadeInVariant,
  motion
} from "assets/motion/motionVariants";

const ArticlesGrid = ({ articles }) => {
  const [pagination, setPagination] = useState({
    articles: undefined,
    total: articles?.length,
    visible: 4
  });

  const handleLoadMore = () => {
    let paginationCopy = { ...pagination };
    let newVisibleLimit = pagination.visible + 4;
    setPagination({ ...paginationCopy, visible: newVisibleLimit });
  };

  const loadMoreButtonVisible = () => {
    if (pagination.total <= pagination.visible) return null;
    return <AppButton onClick={handleLoadMore} label="load more" />;
  };

  useEffect(() => {
    const paginationCopy = { ...pagination };

    setPagination({
      ...paginationCopy,
      articles: articles.slice(0, pagination.visible)
    });
  }, [articles]);

  return (
    <div className={styles.container}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className={styles.grid}
        viewport={{ once: true }}
      >
        {pagination.articles?.map((article) => (
          <ArticlePreviewBlock key={article.id} article={article} />
        ))}
      </motion.div>
      {loadMoreButtonVisible()}
    </div>
  );
};

export default ArticlesGrid;
