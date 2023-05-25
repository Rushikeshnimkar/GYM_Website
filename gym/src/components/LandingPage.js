import React from 'react';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
 
  return (
    <div className="bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Gym Logo */}
            <div className="flex-shrink-0">
              <img className="h-8" src="/path/to/gym-logo.png" alt="Gym Logo" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex">
              <a href="/" className="nav-link">Home</a>
              <a href="/programs" className="nav-link">Programs</a>
              <a href="/why-us" className="nav-link">Why Us</a>
              <a href="/plans" className="nav-link">Plans</a>
              <a href="/join-us" className="nav-link" >Join Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Your content here */}
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Gym!</h1>
        <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default LandingPage;
