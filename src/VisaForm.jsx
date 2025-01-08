import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function VisaForm() {
  const [formData, setFormData] = useState({
    nationality: "",
    countryOfResidence: "",
    intention: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/visa-advice",
        formData
      );
      setResult(response.data.response);
    } catch (err) {
      setError("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="form-container"
      style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}
    >
      <h2>Get the Best Visa Advice with AI</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nationality *</label>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          >
            <option value="">Select nationality</option>
            <option value="South Africa">South Africa</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Kenya">Kenya</option>
            <option value="Ghana">Ghana</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="Namibia">Namibia</option>
          </select>
        </div>

        <div>
          <label>Country of Residence *</label>
          <select
            name="countryOfResidence"
            value={formData.countryOfResidence}
            onChange={handleChange}
            required
          >
            <option value="">Select country of residence</option>
            <option value="South Africa">South Africa</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Kenya">Kenya</option>
            <option value="Ghana">Ghana</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="Namibia">Namibia</option>
          </select>
        </div>

        <div>
          <label>Intentions in South Africa *</label>
          <select
            name="intention"
            value={formData.intention}
            onChange={handleChange}
            required
          >
            <option value="">Select your intentions</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Tourism">Tourism</option>
            <option value="Permanent Residence">Permanent Residence</option>
          </select>
        </div>

        <div>
          <label>Inquiry Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please describe your inquiry in detail..."
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>

      {loading && <p>Loading, please wait...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Response:</h3>
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default VisaForm;
