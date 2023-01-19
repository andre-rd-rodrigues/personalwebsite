import React from "react";
import PageContainer from "components/PageContainer/PageContainer";
import ReactGA from "react-ga4";
import ArticlesGrid from "./ArticlesGrid/ArticlesGrid";
import styles from "./blog.module.scss";
import { sortArticlesByDate } from "utils";

const Blog = () => {
  return (
    <PageContainer bgColor="light-grey" className={styles.container}>
      <div className={styles.title}>
        <div className={styles.blogImage} />
        <h1>Curiosity Gem</h1>
        <p>Get the real experience and visit my official blog website</p>
        <button
          onClick={() =>
            ReactGA.event({
              category: "Navigation",
              action: "click_navigation_to_blog"
            })
          }
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://blog.andrerodrigo.com"
          >
            go to blog
          </a>
        </button>
      </div>
      <div style={styles.articles}>
        <ArticlesGrid articles={sortArticlesByDate()} />
      </div>
    </PageContainer>
  );
};

export default Blog;
