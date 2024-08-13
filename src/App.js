import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.components";
import Logger from "./components/JotDown.component";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/logger" Component={Logger} />
    </Routes>
  );
}

export default App;
