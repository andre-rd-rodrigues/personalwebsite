import Navbar from "components/AppNavbar/AppNavbar";
import { Works, Homepage } from "pages";
import About from "pages/About/About";
import Category from "pages/Category/Category";
import Contact from "pages/Contact/Contact";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/*  <Navbar /> */}
      <Routes>
        <Route path="/works" element={<Works />} />
        <Route path="/works/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
