import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from './LoginSignUp/Navbar';

export default function UpdateUser() {

    const {id} = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    useEffect( () => {
            axios.get('http://localhost:3001/getUser/'+id)
            .then( result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch( err => console.log(err))
        }, [])

        const Update = (e) => {
            e.preventDefault();
            axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
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
            <div className="w-10 bg-white  div-class1 shadow-lg box">
                <form onSubmit={Update}>
                    <h2 className="text-center mb-4 text-primary">Update User</h2>
                    <div className="mb-2">
                        <label className="form-label fw-bold" htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" 
                            className="form-control border-primary shadow-sm"
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label fw-bold" htmlFor="">Email</label>
                        <input type="email" placeholder="Enter Email"
                            className="form-control border-primary shadow-sm"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label fw-bold" htmlFor="">Age</label>
                        <input type="text" placeholder="Enter Age" 
                            className="form-control border-primary shadow-sm"
                            value={age}  onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary w-100 fw-bold">Update</button>
                </form>
            </div>
        </div>
    </>
  )
}
