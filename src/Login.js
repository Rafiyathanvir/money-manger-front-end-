import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { config } from './config';
import './login.css';


function Login() {
    const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        const login = await axios.post(`${config.api}/`, values);
        alert(login.data.message);
        localStorage.setItem("react_app_token",login.data.token);
        localStorage.setItem("profile",login.data.profile);
        if(login.data.message=="successfully logged in"){
        navigate("/portal/dashboard");
        }else{
          navigate("/");
        }
      } catch (error) {
        console.log("login error")
        
      }
    }
  });
  return (
    <>

    <div className='container-fluid  qw'>
    
      <div className='row pt-3'>
        <div className='col-lg-4 '></div>
        <div className='col-lg-4 mt-4'>
        <div className='heading'>Welcome to Money Manager<i class="bi bi-piggy-bank-fill"></i></div>

          <form onSubmit={formik.handleSubmit} autoComplete="off" className='login'>
            <h1>Login</h1>
            <div className="form-group mt-2">

              <label for="username">User Name</label>
              <input type="text" className="form-control" id="username"  placeholder="Enter user name" name="username" value={formik.values.username} onChange={formik.handleChange} />

            </div>
            <div className="form-group mt-2">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            </div>
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <input type="submit" value='Login' className="btn btn-success  mt-2 " />
            <label className='forgetpassword' ><Link style={{ color: "white" }} to='/forget_password'> Forget Password</Link></label>

            <div className="form-group mt-1">
              <label>Don't have an account?<Link style={{ color: "red" }} to='/register'> Signup</Link></label>

            </div>
            <div className="form-group mt-1">
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login