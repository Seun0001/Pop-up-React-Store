import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Result from "./components/Result";
import { GameProvider } from "./context/GameContext";

const App = () => (
  <GameProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  </GameProvider>
);

export default App;
