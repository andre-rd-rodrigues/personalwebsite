import { articles } from "mocks/articles";

/**
 * Function to get articles by id
 * @param {string} id article id
 */
const getArticleById = (id) => {
  return articles.filter((item) => item.id === id)[0];
};

/**
 * Function to get the article according to title
 * @param title title string
 */

const getArticleByTitle = (title) => {
  return articles.filter(
    (item) => item.title.toLowerCase().trim() === title.toLowerCase().trim()
  )[0];
};

/**
 *  Function that sorts articles by date
 */

const sortArticlesByDate = () => {
  const articlesSorted = [...articles];

  articlesSorted.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return articlesSorted;
};

export { getArticleById, getArticleByTitle, sortArticlesByDate };
