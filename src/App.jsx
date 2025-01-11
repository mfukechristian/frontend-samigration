import React from "react";
import { Routes, Route } from "react-router-dom";
import FormScreen from "./components/FormScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<FormScreen />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </div>
  );
}

export default App;
