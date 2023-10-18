// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Characters } from "../pages/Characters";
import { Akatsuki } from "../pages/Akatsuki";

const Router = () => (
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/characters" exact element={<Characters />} />
    <Route path="/akatsuki" exact element={<Akatsuki />} />
  </Routes>
);

export default Router;