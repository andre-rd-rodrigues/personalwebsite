import PageContainer from "components/PageContainer/PageContainer";
import React from "react";
import styles from "./blogresultspage.module.scss";

const BlogResultsPage = () => {
  return (
    <PageContainer
      color="dark"
      bgColor="grey-yellow"
      className={styles.container}
    >
      <div className={styles.resultsContainer}>
        <h1>Results</h1>
        <p></p>
      </div>
    </PageContainer>
  );
};

export default BlogResultsPage;
