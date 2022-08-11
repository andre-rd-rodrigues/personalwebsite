import { blog } from "mocks/data";

const getRecentPosts = () => {};

const getPostsByCategory = (category) => {};

const getSearchedPost = (inputValue) => {};

const getArticleById = (id) => {
  return blog.articles.filter((item) => item.id === id)[0];
};
export { getRecentPosts, getPostsByCategory, getSearchedPost, getArticleById };
