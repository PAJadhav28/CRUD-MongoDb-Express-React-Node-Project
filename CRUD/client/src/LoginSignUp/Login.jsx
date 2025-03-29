import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import main from '../Images/main.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Please Enter Details!");
    } else {
      let getDetails = JSON.parse(localStorage.getItem("user"));
      let found = false;

      getDetails.forEach((curValue) => {
        if (curValue.email === email && curValue.password === password) {
          alert("Login Successfully!");
          navigate("/users");
          found = true;
        }
      });

      if (!found) {
        setMsg("Invalid Email or Password!");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-lg" style={{ width: "25rem" }}>
          <h3 className="text-center mb-3">Log In</h3>
          <p className="text-danger text-center">{msg}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter your Email"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your Password"
                onChange={handleInput}
              />
            </div>
            <p className="text-center">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
            <button className="btn btn-primary w-100">Log In</button>
          </form>
        </div>
            {/* Image Section */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={main} alt="Signup Image" className="img-fluid" />
            </div>
      </div>
    </div>
  );
};

export default Login;
