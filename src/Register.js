import React from 'react'
import './register.css';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { config } from './config';


function Register() {
    const navigate=useNavigate();
    const formik = useFormik({
      initialValues: {
        username:"",
        email: "",
        password: ""
        
      },
      onSubmit: async (values) => {
        try {
          const register=await axios.post(`${config.api}/register`,values);
         
          alert(register.data.message);
          navigate("/");
        } catch (error) {
          console.log("register error");
        }
      }
    });
    return (
      <div className='container-fluid qq'>
        <div className='row'>
          <div className='col-lg-4 '></div>
          <div className='col-lg-4'>
            <form onSubmit={formik.handleSubmit} autoComplete="off" className='register'>
            <h1 className="rh ">Register</h1>
            <div className="form-group mt-2 ">
                <label className="rlab " for="firstname">User Name</label>
                <input type="text" className="form-control" id="User Name" placeholder="User Name" name="username" value={formik.values.username} onChange={formik.handleChange}/>
              </div>
              <div className="form-group mt-2">
                <label className="rlab " for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
              </div>
              <div className="form-group mt-2">
                <label className="rlab " for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
              </div>
              
              <div className="form-check mt-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="rlab form-check-label" for="exampleCheck1">I agree with terms and condition</label>
              </div>
              <input type="submit" value='Signup' className="btn btn-success  mt-2 "/>
              <div className="form-group mt-1">
              <label className="rlab ">Already have an account?<Link style={{color:"yellow"}} to='/'> Login</Link></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Register