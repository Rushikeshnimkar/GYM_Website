import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-tops justify-end min-h-screen bg-cover bg-center h-14 bg-[url(https://wallpaperaccess.com/full/1087580.jpg)] ">
        <div className="bg-transparent bg-opacity-80 p-8 rounded shadow-md  ">
          
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/signup")}
              className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded mr-4"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
