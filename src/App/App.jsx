import Navbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";
import { Works, Homepage } from "pages";
import About from "pages/About/About";
import BlogArticlePage from "pages/Blog/ArticlePage/BlogArticlePage";
import PageCategory from "pages/Category/PageCategory";
import Contact from "pages/Contact/Contact";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogHomepage from "pages/Blog/Homepage/BlogHomepage";
import BlogSidebar from "components/BlogSidebar/BlogSidebar";

const App = () => {
  return (
    <>
      <Navbar />
      <BlogSidebar />
      <Routes>
        <Route path="/works" element={<Works />} />
        <Route path="/works/category" element={<PageCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogHomepage />} />
        <Route path="/blog/article" element={<BlogArticlePage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
