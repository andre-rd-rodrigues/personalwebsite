import React from "react";
import styles from "./blog.module.scss";
import BlogHomepage from "./BlogHomepage";

const Blog = () => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <BlogHomepage />
    </div>
  );
};

export default Blog;
