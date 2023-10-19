// src/App.js
// import { BrowserRouter } from "react-router-dom";
// import  Router  from "./routes/Router";
// import { NavBar } from './components/NavBar/NavBar';
import { Characters } from './pages/Characters'
import {NavBar} from './components/NavBar/NavBar'
function App() {
  return (
    <>
      <NavBar />
      <Characters />
    </>
  );
}

export default App;
