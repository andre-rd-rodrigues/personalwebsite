import Homepage from "pages/Homepage/Homepage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "styles/global.scss";

const App = () => {
  return (
    <>
      {/*   <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/*   <Footer /> */}
    </>
  );
};

export default App;
