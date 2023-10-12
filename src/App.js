// src/App.js
import { BrowserRouter } from "react-router-dom";
import  Router  from "./routes/Router";
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router/>
    </BrowserRouter>
  );
}

export default App;
