import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

// import Home from './LoginSignUp/Home'
import Navbar from './LoginSignUp/Navbar';


export default function Users() {
    const [users, setUsers] = useState([])

    useEffect( () => {
        axios.get('http://localhost:3001')
        .then( result => setUsers(result.data))
        .catch( err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(result =>{
             console.log(result)
             window.location.reload()
            })
        .catch(err => console.log(err))
    }

  return (
    <>
      <Navbar />
        <div className="d-flex flex-column bg-light  vh-100  justify-content-center align-items-center div1 ">
            <div className="w-50 bg-white  p-4 shadow-lg box">
                {/* to add new records */}
                <Link to="/create" className='btn btn-success'>Add+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) =>{
                                return(
                                    <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <button to="/delete" className='btn btn-danger' onClick= {(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>

  )
}
