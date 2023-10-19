// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Characters } from "../pages/Characters";

const Router = () => (
  <Routes>
    <Route path="/characters" exact element={<Characters />} />
  </Routes>
);

export default Router;