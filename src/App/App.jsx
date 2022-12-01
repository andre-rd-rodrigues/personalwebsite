import React from "react";
import { useEffect } from "react";
import { GA_ID } from "analytics/utils";
import Navbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";
import { Works, Homepage } from "pages";
import About from "pages/About/About";
import BlogArticlePage from "pages/Blog/ArticlePage/ArticlePage";
import Blog from "pages/Blog/Blog";
import Contact from "pages/Contact/Contact";
import WorkCategoryPage from "pages/WorkCategoryPage/WorkCategoryPage";
import ReactGA from "react-ga4";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const routerLocation = useLocation();

  //Lifecycle
  useEffect(() => {
    /*     ReactGA.initialize(GA_ID); */
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (routerLocation.pathname !== "/") {
      ReactGA.send({
        hitType: "pageview",
        page: routerLocation.pathname + routerLocation.search
      });
    }
  }, [routerLocation.pathname, routerLocation.search]);

  return (
    <div id="outer-container">
      <main id="page-wrap">
        <Navbar />
        <Routes>
          <Route path="/works" element={<Works />} />
          <Route path="/works/category" element={<WorkCategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/article/:id" element={<BlogArticlePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
