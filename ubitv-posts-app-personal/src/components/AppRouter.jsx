import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "..//Pages/About";
import Posts from "../Pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
