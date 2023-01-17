import React from "react";
import PageContainer from "components/PageContainer/PageContainer";
import { articles } from "mocks/articles";
import ReactGA from "react-ga4";
import ArticlesGrid from "./ArticlesGrid/ArticlesGrid";
import styles from "./blog.module.scss";

const Blog = () => {
  return (
    <PageContainer bgColor="light-grey" className={styles.container}>
      <div className={styles.title}>
        <div className={styles.blogImage}></div>
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
            get started
          </a>
        </button>
      </div>
      <div style={styles.articles}>
        <ArticlesGrid articles={articles} />
      </div>
    </PageContainer>
  );
};

export default Blog;
