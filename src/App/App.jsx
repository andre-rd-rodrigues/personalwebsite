import Navbar from "components/AppNavbar/AppNavbar";
import { Works, Homepage } from "pages";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </>
  );
};

export default App;
