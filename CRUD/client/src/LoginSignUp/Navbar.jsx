import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("user");
        navigate("/")
    }
  return (
    <div>
      <nav className="navbar">
          <ul className="nav-links">
              <li>
                  <a className="head">ArcherDataHub!</a>
                  <a href="/users">Users</a>
                  <a href="/create">Add User</a>
              </li>
          </ul>
          <button className="btn btn-danger logout-btn" onClick={logout}>Logout</button>
      </nav>
    </div>

  )
}

export default Navbar