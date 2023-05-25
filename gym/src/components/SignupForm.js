import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Check Your Email");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert("enter correct phone number");
      return;
    }
    axios
      .post("http://localhost:8080/register", {
        username: username,
        email: email,
        password: password,
        age: age,
        phoneNumber: phoneNumber,
        gender: gender,
      })
      .then((res) => {
        navigate("/login");
      });

    // Perform signup logic here
    // You can access the form values from the state variables
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Gender:", gender);
    navigate("/login");
  };

  return (
    <div className="min-h-screen  bg-black flex justify-center items-center text-white bg-[url(https://wallpaperaccess.com/full/1087580.jpg)] ">
      <form
        onSubmit={handleSignup}
        className="border-8 px-32 py-6 flex flex-col justify-center items-center backdrop-blur-lg"
      >
        <div className="backdrop-blur-lg">
          <div className="inputContainer pb-2  ">
            <div className="text-white">Full Name:</div>
            <input
              className="text-white bg-black hover:bg-slate-500  py-2 px-3 border-2 rounded-xl mx-2"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputContainer pb-2">
            <div className="text-white">email:</div>
            <input
              className="text-white bg-black hover:bg-slate-500  py-2 px-3 border-2 rounded-xl mx-2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              A
            />
          </div>
          <div className="inputContainer pb-2">
            <div className="text-white">Password:</div>
            <input
              className="text-white bg-black hover:bg-slate-500  py-2 px-3 border-2 rounded-xl mx-2"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              A
            />
          </div>
          <div className="inputContainer pb-2">
            <div className="text-white">Age:</div>
            <input
              className="text-white bg-black hover:bg-slate-500  py-2 px-3 border-2 rounded-xl mx-2"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              A
            />
          </div>
          <div className="inputContainer pb-2">
            <div className="text-white">Phone Number:</div>
            <input
              className="text-white bg-black hover:bg-slate-500  py-2 px-3 border-2 rounded-xl mx-2"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              A
            />
          </div>
          <div className="pb-5">
            <div className="text-white">Gender:</div>
            <select
              className="py-1 px-8 bg-black"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              
            </select>
          </div>
          <button
            className="justify-items-center border-2 border-white px-9 py-3 hover:bg-stone-500  "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
