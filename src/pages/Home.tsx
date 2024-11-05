import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the User Registration System</h1>
      <p className="text-lg text-gray-600 mb-4">Please login or register to continue.</p>

      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
