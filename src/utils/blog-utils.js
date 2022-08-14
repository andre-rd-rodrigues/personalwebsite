import { blog } from "mocks/data";

const getRecentPosts = () => {};

const getPostsByCategory = (category) => {
  const articles = blog.articles.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (articles.length === 0) return null;
  return articles;
};

const getSearchedPost = (inputObject) => {
  if (inputObject.type === "category") {
    if (inputObject.value === "all") return blog.articles;
    if (inputObject.value === "recent") return blog.articles.slice(0, 3);
    return getPostsByCategory(inputObject.value);
  }
};

const getArticleById = (id) => {
  return blog.articles.filter((item) => item.id === id)[0];
};
export { getRecentPosts, getPostsByCategory, getSearchedPost, getArticleById };
