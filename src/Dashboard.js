import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { config } from './config';
function Dashboard() {
   
    useEffect(() => {
        fetchdata();
    }, []);
    let fetchdata = async () => {
        let a = await axios.get(`${config.api}/portal/dashboard`, {
            headers: {
              'authorization': `${localStorage.getItem('react_app_token')}`
            }
          });
        

    }
    return (

        <div className='container'>
            {/* {console.log(a.data)} */}

            <div className='row'>
                <div className='col-lg-6'>
                    <div className="card" >
                        <img className="card-img-top" src="https://t3.ftcdn.net/jpg/00/69/38/84/360_F_69388447_sJ9eZznsvU71RAXHTEaAGbLzFCm9pHzX.jpg" alt="Card image cap" style={{ height: "250px" }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "black", fontSize: "40px" }}>Income</h5>
                            
                            

                            <Link to={"/portal/incomelist"} className="btn btn-success btn-block " >View Income Histroy</Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="card" >
                        <img className="card-img-top" src="https://t3.ftcdn.net/jpg/02/68/55/08/360_F_268550893_JE3MDyogXadoGzWIQbbQuFnyYfVJE5IO.jpg" alt="Card image cap" style={{ height: "250px" }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "black", fontSize: "40px" }}>Expense</h5>

                            
                            <Link to={"/portal/expenselist"} className="btn btn-danger btn-block">View Expense Histroy</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard