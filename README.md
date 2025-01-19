Here's an updated documentation based on your tech stack:

---

# **Samigration - AI-Powered Visa Advisory for South Africa**

**Samigration** is an AI-driven web application that provides personalized visa advice for South Africa. The app leverages **Retrieval-Augmented Generation (RAG)** to embed and retrieve visa-related information, ensuring users receive accurate and tailored guidance based on their profile.

---

## **Features**

- **Personalized Visa Advice:**  
  Users receive tailored recommendations based on their nationality, travel purpose, and additional details.

- **AI-Powered Knowledge Base:**  
  Utilizes Google Gemini and Mistral AI models to analyze and retrieve visa requirements.

- **Seamless User Experience:**  
  Intuitive and responsive form-based UI for easy interaction.

- **Real-Time Data Retrieval:**  
  Ensures users receive the most up-to-date visa guidelines.

---

## **Tech Stack**

### **Frontend**

- **React:** Component-based UI framework.
- **CSS:** Responsive styling for modern UI.
- **Axios:** Handles API requests to backend services.

### **Backend**

- **Node.js & Express.js:** Efficient API handling and routing.
- **MongoDB:** Stores embedded visa-related information for quick retrieval.
- **Google Gemini AI:** Processes user queries and generates intelligent responses.
- **Mistral AI:** Handles retrieval tasks to fetch relevant visa data.

---

## **How It Works**

1. **User Input:**

   - Users fill out the form with their name, nationality, travel reason, and additional details.

2. **Data Processing:**

   - The backend processes the input, queries the database, and retrieves the relevant visa information.

3. **AI-Powered Response:**
   - Google Gemini AI and Mistral AI analyze the data and generate personalized visa advice.

---

## **Installation & Setup**

### **Prerequisites**

Ensure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

### **Frontend Setup**

```bash
# Clone the frontend repository
git clone https://github.com/mfukechristian/Samigration-frontend.git

# Navigate to the project directory
cd Samigration-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### **Backend Setup**

```bash
# Clone the backend repository
git clone https://github.com/mfukechristian/Samigration-backend.git

# Navigate to the project directory
cd Samigration-backend

# Install dependencies
npm install

# Start the backend server
npm start
```

---

## **Usage Instructions**

1. Open the frontend in a web browser.
2. Fill in the required fields (Name, Nationality, Reasons, Description).
3. Click "Send your request" to receive personalized visa advice.

---

## **Environment Variables**

Create a `.env` file in the backend directory and add the following credentials:

```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
MISTRAL_API_KEY=your_mistral_api_key
PORT=5000
```

---

## **Project Structure**

### **Frontend**

```
Samigration-frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
├── public/
├── package.json
└── vite.config.js
```

### **Backend**

```
Samigration-backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── index.js
├── package.json
└── .env
```

---

## **Future Improvements**

- Multilingual support for broader accessibility.
- Integration with South African immigration services for official updates.
- Advanced security measures for user data.
- More AI model integrations for enhanced accuracy.

---

## **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

## **Contact**

For inquiries or feedback, contact:  
[Christian Mfuke](https://github.com/mfukechristian)
