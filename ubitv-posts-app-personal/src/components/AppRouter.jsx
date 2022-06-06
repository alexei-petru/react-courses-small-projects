import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import About from "..//Pages/About";
import PageNotFound from "../Pages/PageNotFound";
import Posts from "../Pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
