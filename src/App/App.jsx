import { useEffect } from "react";
import Navbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";
import { Homepage, Works } from "pages";
import About from "pages/About/About";
import Blog from "pages/Blog/Blog";
import Contact from "pages/Contact/Contact";
import Skills from "pages/Skills/Skills";
import WorkCategoryPage from "pages/WorkCategoryPage/WorkCategoryPage";
import ReactGA from "react-ga4";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const routerLocation = useLocation();

  //Lifecycle
  useEffect(() => {
    if (process.env.REACT_APP_GA_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_ID);
    }
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
          <Route path="/portfolio" element={<Works />} />
          <Route path="/works/category" element={<WorkCategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
