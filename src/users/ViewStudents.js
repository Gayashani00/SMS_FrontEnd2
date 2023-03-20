import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";

export default function ViewStudents ()  {
    const {id} = useParams();

    const [user, setUser]=useState({
        registrationnumber:"",
        firstname:"",
        lastname:"",
        email:""
    })

    useEffect(()=>{
        loadUSer()
    })

    const loadUSer=async()=> {
        const result=await axios.get(`http://localhost:8084/user/${id}`)
        setUser(result.data)
    }
  return (
    
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-light">
                <h2 className="text-Center">Students Details</h2>
                <div className="card">
                    <div className="card-headr">
                        Details of Student Id :
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Registration Number :</b>
                                </li>

                                <li className="list-group-item">
                                <b>First Name :</b>
                            </li>

                            <li className="list-group-item">
                                <b>Last Name :</b>
                            </li>

                            <li className="list-group-item">
                                <b>Email :</b>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <Link className="btn btn-primary my-2" to={"/"}>
                    Back to Home Page
                </Link>

                </div>
                </div>
               
  );
}
