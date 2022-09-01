import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ArticlesGrid from "components/Blog/ArticlesGrid/ArticlesGrid";
import PageContainer from "components/PageContainer/PageContainer";
import { useSearchParams } from "react-router-dom";
import { getSearchedPost } from "utils/blog-utils";
import styles from "./blogresultspage.module.scss";

const BlogResultsPage = () => {
  const [articles, setArticles] = useState(undefined);

  const [searchQuery] = useSearchParams();

  //Check if its a category or not
  const queryValueToObject = () => {
    let result = {};

    const input = searchQuery.get("input");
    const category = searchQuery.get("category");

    if (!input && !category) return null;

    if (input) {
      result.type = "input";
      result.value = input;
    }
    if (category) {
      result.type = "category";
      result.value = category;
    }
    return result;
  };

  useEffect(() => {
    if (queryValueToObject()) {
      setArticles(getSearchedPost(queryValueToObject()));
    }
  }, [searchQuery]);

  return (
    <PageContainer
      color="dark"
      bgColor="grey-yellow"
      className={styles.container}
    >
      <div className={styles.results}>
        <h1>Results:</h1>
        {articles && <ArticlesGrid articles={articles} />}
        {articles === null && (
          <div className={styles.notFound}>
            <p>
              No matches found for: <span>{queryValueToObject().value}</span>
              <br />
            </p>
            <p>Make sure all words are spelled correctly.</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default BlogResultsPage;
