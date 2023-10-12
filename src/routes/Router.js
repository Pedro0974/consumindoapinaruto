// routes/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Characters } from "../pages/Characters";
import { Clans } from "../pages/Clans";
import { Villages } from "../pages/Villages";
import { KekkeiGenkais } from "../pages/KekkeiGenkais";
import { Akatsuki } from "../pages/Akatsuki";

const Router = () => (
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/characters" exact element={<Characters />} />
    <Route path="/clans" exact element={<Clans />} />
    <Route path="/villages" exact element={<Villages />} />
    <Route path="/kekkeigenkais" exact element={<KekkeiGenkais />} />
    <Route path="/akatsuki" exact element={<Akatsuki />} />
  </Routes>
);

export default Router;