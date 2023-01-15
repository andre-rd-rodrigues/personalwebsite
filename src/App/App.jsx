import React from "react";
import { useEffect } from "react";
import { GA_ID } from "analytics/utils";
import Navbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";
import { Works, Homepage } from "pages";
import About from "pages/About/About";
import Contact from "pages/Contact/Contact";
import WorkCategoryPage from "pages/WorkCategoryPage/WorkCategoryPage";
import ReactGA from "react-ga4";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  //Lifecycle
  useEffect(() => {
    ReactGA.initialize(GA_ID);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.pathname !== "/") {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search
      });
    }
  }, [location.pathname, location.search]);

  return (
    <div id="outer-container">
      <main id="page-wrap">
        <Navbar />
        <Routes>
          <Route path="/works" element={<Works />} />
          <Route path="/works/category" element={<WorkCategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
