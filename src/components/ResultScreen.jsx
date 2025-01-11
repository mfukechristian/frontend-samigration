// components/ResultScreen.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/ResultScreen.css";

function ResultScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { response } = location.state || { response: "No response available." };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="result-screen">
      <h1>Visa Advice Result</h1>
      <ReactMarkdown>{response}</ReactMarkdown>
      <button onClick={handleBack}>Back to Form</button>
    </div>
  );
}

export default ResultScreen;
