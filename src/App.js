import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.components";
import ExerciseDetail from "./components/ExerciseDetail.components";
import Logger from "./components/JotDown.component";
import { ExerciseProvider } from "./components/exerciseContext";
import SignIn from "./components/SignIn.components";

function App() {
  return (
    <ExerciseProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:exerciseId" element={<ExerciseDetail />} />
        <Route path="/logger" element={<Logger />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </ExerciseProvider>
  );
}

export default App;
