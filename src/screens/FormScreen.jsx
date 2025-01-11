// components/FormScreen.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import "../styles/FormScreen.css";

function FormScreen() {
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    reason: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        intention: formData.reason,
      };
      delete payload.reason;

      const response = await axios.post(
        "http://localhost:5000/api/visa-advice",
        payload
      );
      navigate("/result", { state: { response: response.data.response } });
    } catch (err) {
      console.error("An error occurred:", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <p>Loading .....</p>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="form-screen">
      <h1>Get Personalized Visa Advice for South Africa with AI</h1>
      <p>
        Fill out the form, get instant advice, and kickstart your South African
        journey!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="eg. John Kitenge"
            required
          />
        </label>
        <label>
          Nationality
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          >
            <option value="">Select a country</option>
            <option value="South Africa">South Africa</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Reasons
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          >
            <option value="">Select your reason</option>
            <option value="Tourism">Tourism</option>
            <option value="Work">Work</option>
          </select>
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell me more"
            required
          ></textarea>
        </label>
        <button type="submit">Send your request</button>
      </form>
    </div>
  );
}

export default FormScreen;
