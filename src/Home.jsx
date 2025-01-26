import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16 px-8 text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4">Create AI-Powered Courses in Seconds</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Use the power of AI to generate personalized learning experiences.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/login')} // Redirect to Login page
          className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-purple-100 transition"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <div className="py-16 px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Why Choose Our AI Course Generator?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Personalized Learning Paths',
              description:
                'Generate custom courses tailored to individual skills, goals, and preferences.',
              icon: '🎯',
            },
            {
              title: 'AI-Powered Insights',
              description:
                'Leverage AI to create engaging, up-to-date, and structured content effortlessly.',
              icon: '🤖',
            },
            {
              title: 'Save Time',
              description:
                'Automate the course creation process and focus on delivering quality education.',
              icon: '⏰',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-indigo-600 text-white py-16 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Build Your Dream Course?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Start generating your courses now and revolutionize learning with AI.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/course')} // Redirect to Course page
          className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-indigo-100 transition"
        >
          Start Generating
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
