import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div>
            <Navbar />
              <div className='home mt-5 text-center'>
                {/* <h2>Welcome to the Home Page!</h2> */}
                {/* <button className="btn btn-danger mt-3" onClick={logout}>Logout</button> */}
            </div>
        </div>
    );
};

export default Home;
