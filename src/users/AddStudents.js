import axios from 'axios';
import React, { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";


export default function AddStudents() {

    let navigate=useNavigate();

    const[user, setUser]=useState({
        registrationnumber:"",
        name:"",
        firstname:"",
        lastname:"",
        email:"",


    });

    const{registrationnumber, firstname,lastname,email}=user

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8082/user",user);
        navigate("/"); 
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-light">
                <h2 className="text-Center m-4">Register Student</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                
                <br></br>
                <div className=" mb-3">
                    <label htmlFor="registrationnumber" className="form-label" >
                        Registration Number
                   </label>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter your registration number"
                   name="registrationnumber"
                   value={registrationnumber}
                   onChange={(e)=>onInputChange(e)}
                   />
                   
                </div>

                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label" >
                        First Name
                   </label>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter your first name"
                   name="firstname"
                   value={firstname}
                   onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label" >
                    Last Name
                   </label>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter your last name"
                   name="lastname"
                   value={lastname}
                   onChange={(e) => onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Email" className="form-label" >
                    Email
                   </label>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter your email"
                   name="email"
                   value={email}
                   onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-success">Submit</button>
                <Link type="submit" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
