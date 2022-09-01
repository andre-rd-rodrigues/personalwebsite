import React from "react";
import { useEffect } from "react";
import Navbar from "components/AppNavbar/AppNavbar";
import BlogSidebar from "components/BlogSidebar/BlogSidebar";
import Footer from "components/Footer/Footer";
import { Works, Homepage } from "pages";
import About from "pages/About/About";
import BlogArticlePage from "pages/Blog/ArticlePage/BlogArticlePage";
import BlogHomepage from "pages/Blog/Homepage/BlogHomepage";
import BlogResultsPage from "pages/Blog/ResultsPage/BlogResultsPage";
import Contact from "pages/Contact/Contact";
import WorkCategoryPage from "pages/WorkCategoryPage/WorkCategoryPage";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const isBlogPage = /blog|article/.test(location.pathname);

  //Lifecycle
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          {/*  <Route path="/blog" element={<BlogHomepage />} />
          <Route path="/blog/article" element={<BlogArticlePage />} />
          <Route path="/blog/article/search" element={<BlogResultsPage />} /> */}
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
