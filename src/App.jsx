import React from "react";
import { Routes, Route } from "react-router-dom";
import FormScreen from "./components/FormScreen";
import LoadingScreen from "./components/LoadingScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<FormScreen />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </div>
  );
}

export default App;
