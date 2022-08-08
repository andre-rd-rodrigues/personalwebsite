import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import TopArticle from "components/Blog/TopArticle/TopArticle";
import { blog } from "mocks/data";
import React from "react";
import styles from "./blog.module.scss";

function BlogHomepage() {
  return (
    <div className={styles.blogHomepage}>
      <h1>ideas & thoughts</h1>
      <TopArticle article={blog.articles[0]} />
      <h2 className="recent_post">Recent posts</h2>
      <ArticlesGrid articles={blog.articles} />
    </div>
  );
}

export default BlogHomepage;
