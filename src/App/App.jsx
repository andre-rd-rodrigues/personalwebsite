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
import ReactGa from "react-ga";
import { Routes, Route, useLocation } from "react-router-dom";
import { GOOGLE_ANALYTICS_ID } from "utils/settings";

const App = () => {
  const location = useLocation();

  const isBlogPage = /blog|article/.test(location.pathname);
  const ga_ID = process.env.REACT_APP_GA_ID;

  //Lifecycle
  useEffect(() => {
    ReactGa.initialize(ga_ID);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (ga_ID) {
      ReactGa.pageview(location.pathname + location.search);
    }
  }, [location.pathname, location.search]);

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
