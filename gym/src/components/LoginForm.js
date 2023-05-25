import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    if( User.email=="admin@gmail.com" && User.password == "password"){
      navigate("/admindashboard")
    } else{
      axios
      .post("http://localhost:8080/login", {
        email: User.email,
      })
      .then((res) => {

        if (res.data[0].password == User.password) {
          localStorage.setItem("userid", res.data[0].id);
          localStorage.setItem("email", User.email);
          navigate("/landing");
        } else {
          alert("wrong password");
        }
      });
  };
    }
    

  return (
    <div className="wrapper bg-[url(https://wallpaperaccess.com/full/1087580.jpg)]">
      <form className="logForm " onSubmit={(e) => handleLogin(e)}>
        <div className="formHead">LOGIN</div>
        <div className="inputContainer">
          <div className="label">Email : </div>
          <input
            name="email"
            className="logInput"
            type="text"
            value={User.email}
            onChange={(e) =>
              setUser({ ...User, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="inputContainer">
          <div className="label">Password : </div>
          <input
            name="password"
            className="logInput"
            type="password"
            value={User.password}
            onChange={(e) =>
              setUser({ ...User, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button className="logSubmit" type="submit">
          Login
        </button>
      </form>
      <div className="register-btn" onClick={() => navigate("/signup")}>
        Register
      </div>
    </div>
  );
};

export default Login;
