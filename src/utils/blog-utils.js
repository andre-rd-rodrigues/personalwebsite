import { blog } from "mocks/data";

const getRecentPosts = () => {};

const getPostsByCategory = (category) => {
  const articles = blog.articles.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (articles.length === 0) return null;
  return articles;
};

const getSearchedPost = (search) => {
  if (search.type === "category") {
    if (search.value === "all") return blog.articles;
    if (search.value === "recent") return blog.articles.slice(0, 3);
    return getPostsByCategory(search.value);
  }

  if (search.type === "input") {
    const results = blog.articles.filter(
      (item) =>
        item.title.includes(search.value) ||
        item.category.includes(search.value)
    );
    if (results.length <= 0) return null;
    return results;
  }
};

const getArticleById = (id) => {
  return blog.articles.filter((item) => item.id === id)[0];
};
export { getRecentPosts, getPostsByCategory, getSearchedPost, getArticleById };
