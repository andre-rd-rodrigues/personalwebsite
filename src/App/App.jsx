import AppNavbar from "components/AppNavbar/AppNavbar";
import Homepage from "pages/Homepage/Homepage";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/*   <Footer /> */}
    </>
  );
};

export default App;
