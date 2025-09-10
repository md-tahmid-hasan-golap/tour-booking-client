import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorImg from "../assets/img/221513-P156QA-346.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      {/* Animated Image / GIF */}
      <img
        src={ErrorImg}
        alt="404 Not Found"
        className="w-64 h-64 md:w-96 md:h-96 mb-8 rounded-lg"
      />

      {/* Message */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
        Oops! You seem lost in the Himalayas.
      </h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
