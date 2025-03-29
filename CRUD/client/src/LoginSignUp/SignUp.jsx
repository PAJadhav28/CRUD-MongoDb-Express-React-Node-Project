import React, { useState } from 'react';
import Navbar from './Navbar';
import main from '../Images/main.jpg';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const userDetail = { name: "", email: "", password: "" };
  const [data, setData] = useState(userDetail);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name === "" || data.email === "" || data.password === "") {
      alert("Please Enter Details!");
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      let arr = [...getData, data];
      localStorage.setItem("user", JSON.stringify(arr));
      alert("Signup Successful!");
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-75">
          
          {/* Signup Form Section */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-4 rounded shadow">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="w-100">
              <input type="text" name="name" className="form-control mb-3" placeholder="Enter your Name" onChange={handleInput} />
              <input type="email" name="email" className="form-control mb-3" placeholder="Enter your Email" onChange={handleInput} />
              <input type="password" name="password" className="form-control mb-3" placeholder="Enter your Password" onChange={handleInput} />
              <p className="text-center">
                Already have an account? <a href="/login">Login</a>
              </p>
              <button className="btn btn-success w-100">Sign Up</button>
            </form>
          </div>

          {/* Image Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={main} alt="Signup Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
