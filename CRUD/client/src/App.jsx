import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './index.css';
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import Users from "./Users";
import Signup from "./LoginSignUp/SignUp";
import Login from './LoginSignUp/Login'
import Home from './LoginSignUp/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/users' element={<Users />} ></Route>
          <Route path='/create' element={<CreateUser />} ></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
