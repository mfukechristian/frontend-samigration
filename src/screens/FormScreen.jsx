// components/FormScreen.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CountrySelect from "../components/CountrySelect";
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
        "https://backend-samigration.onrender.com/api/visa-advice",
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
        <p>We are processing your request. This may take a few minutes...</p>
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
          <CountrySelect
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
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
            <option value="Study in SA">Study in SA</option>
            <option value="Medical Treatment">To come for medical</option>
            <option value="Permanent Residency">
              To get permanent residency
            </option>
            <option value="Asylum">To seek asylum</option>
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
