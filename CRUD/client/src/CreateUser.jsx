import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Navbar from './LoginSignUp/Navbar';


export default function CreateUser() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/users')
        })
        .catch(err => console.log(err))
    }

  return (
    <>  
        <Navbar />
        <div className="d-flex vh-100 bg-light justify-content-center align-items-center div1">
            <div className="w-50 bg-white  p-4 shadow-lg box">
                <h2 className="text-center mb-4 text-primary">Add User</h2>
                <form onSubmit={Submit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            className="form-control border-primary shadow-sm"
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="form-control border-primary shadow-sm" 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Age</label>
                        <input 
                            type="text" 
                            placeholder="Enter Age" 
                            className="form-control border-primary shadow-sm" 
                            onChange={(e) => setAge(e.target.value)} 
                        />
                    </div>
                    <button className="btn btn-primary w-100 fw-bold">Submit</button>
                </form>
            </div>
        </div>

    </>
  )
}
