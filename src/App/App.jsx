import Navbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";
import { Works, Homepage } from "pages";
import About from "pages/About/About";
import BlogArticlePage from "pages/Blog/ArticlePage/BlogArticlePage";
import WorkCategoryPage from "pages/WorkCategoryPage/WorkCategoryPage";
import Contact from "pages/Contact/Contact";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BlogHomepage from "pages/Blog/Homepage/BlogHomepage";
import BlogSidebar from "components/BlogSidebar/BlogSidebar";
import BlogResultsPage from "pages/Blog/ResultsPage/BlogResultsPage";

const App = () => {
  const location = useLocation();

  const isBlogPage = /blog|article/.test(location.pathname);

  return (
    <div id="outer-container">
      {isBlogPage && <BlogSidebar />}
      <main id="page-wrap">
        <Navbar />
        <Routes>
          <Route path="/works" element={<Works />} />
          <Route path="/works/category" element={<WorkCategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogHomepage />} />
          <Route path="/blog/article" element={<BlogArticlePage />} />
          <Route path="/blog/article/search" element={<BlogResultsPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
