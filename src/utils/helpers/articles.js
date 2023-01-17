import { articles } from "mocks/articles";

/**
 * Function to get articles by id
 * @param {string} id article id
 */
const getArticleById = (id) => {
  return articles.filter((item) => item.id === id)[0];
};

export { getArticleById };
