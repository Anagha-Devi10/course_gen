import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown

// Using environment variables for the API key
const apiKey = "AIzaSyDmaFk9madiezhtVnMpCjbmIjfUysQRUsg";

// Creating an instance of GoogleGenerativeAI
const genAI = new GoogleGenerativeAI(apiKey);

// Fetching the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

// Configuration for generation
const generationConfig = {
  temperature: 0.7, // Lower for more structured outputs
  topP: 0.9,
  topK: 40,
  maxOutputTokens: 2048, // Adjusted for Markdown
  responseMimeType: "text/plain",
};

const Course = () => {
  const [topic, setTopic] = useState(""); // User input for topic
  const [response, setResponse] = useState(""); // AI-generated course content
  const [loading, setLoading] = useState(false); // Loading state

  // Function to handle input change
  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const prompt = `Generate a detailed course in plain text format (without any markdown elements) for the topic "${topic}". 
The course should include:
- A brief introduction to the topic
- A table of contents
- Multiple lessons with clear headings
- Objectives for each lesson
- Exercises or questions for practice at the end of each lesson
- A conclusion summarizing the course.

Ensure the output is well-structured and formatted as Markdown.`;

    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      setResponse(result.response.text()); // Set the response
    } catch (error) {
      console.error("Error generating course:", error);
      setResponse("An error occurred while generating the course.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>AI Course Generator</h1>
      <p style={styles.description}>
        Enter a topic to generate an AI-powered course suggestion. This tool helps you generate detailed
        courses with well-structured lessons.
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter the course topic"
          value={topic}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Generate Course
        </button>
      </form>
      {loading ? (
        <div style={styles.loaderContainer}>
          <div style={styles.loader}></div>
          <p>Generating course...</p>
        </div>
      ) : (
        response && (
          <div style={styles.resultContainer}>
            <h2 style={styles.resultHeader}>Generated Course:</h2>
            <div style={styles.resultTextContainer}>
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          </div>
        )
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f4f7fb",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.125rem",
    color: "#555",
    textAlign: "center",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 16px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "all 0.3s ease-in-out",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "12px 18px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
  resultContainer: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  resultHeader: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "15px",
  },
  resultTextContainer: {
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.05)",
  },
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
  },
  loader: {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #007BFF",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite",
  },
};

export default Course;