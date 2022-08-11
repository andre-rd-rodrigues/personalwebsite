import Icon from "components/AppIcon/AppIcon";
import PageContainer from "components/PageContainer/PageContainer";
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticleById } from "utils/blog-utils";
import styles from "./blogarticlepage.module.scss";

const BlogArticlePage = () => {
  const [article, setArticle] = useState(undefined);

  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");

  useEffect(() => {
    if (articleId) return setArticle(getArticleById(articleId));
  }, []);

  return (
    <PageContainer
      color="dark"
      bgColor="grey-yellow"
      className={styles.container}
    >
      <div className={styles.container}>
        <Icon
          icon="arrow-left"
          size={30}
          color="grey"
          onClick={() => window.history.back()}
        />
        <div>
          <div className={styles.title}>
            <h1>{article?.title}</h1>
            <div className={styles.subtitle}>
              <p>{article?.date}</p> <span>|</span> <p>{article?.category}</p>
            </div>
          </div>
          <div
            className="article_title_image"
            style={{ backgroundImage: `url(${article?.image_src})` }}
          />
          <div className={styles.contentContainer}>{article?.content}</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default BlogArticlePage;
