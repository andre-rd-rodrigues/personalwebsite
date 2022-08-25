import AnimatedHeading from "components/AnimatedHeading/AnimatedHeading";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import TopArticle from "components/Blog/TopArticle/TopArticle";
import PageContainer from "components/PageContainer/PageContainer";
import { blog } from "mocks/data";
import React from "react";
import styles from "./bloghomepage.module.scss";
import {
  blogHomepageDelayVariant,
  fadeInVariant,
  motion
} from "assets/motion/motionVariants";

function BlogHomepage() {
  return (
    <PageContainer
      color="dark"
      bgColor="grey-yellow"
      className={styles.container}
    >
      <div className={styles.blogHomepage}>
        <AnimatedHeading>
          <h1>ideas & thoughts</h1>
        </AnimatedHeading>
        <motion.div
          variants={blogHomepageDelayVariant}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={fadeInVariant}>
            <TopArticle article={blog.articles[0]} />
          </motion.div>
          <div>
            <motion.h2 variants={fadeInVariant} className="recent_post">
              Recent posts
            </motion.h2>
            <ArticlesGrid articles={blog.articles} />
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
}

export default BlogHomepage;
