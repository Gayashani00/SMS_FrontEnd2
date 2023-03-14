import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link,useNavigate,useParams} from "react-router-dom";


export default function EditStudents() {

    let navigate=useNavigate();
    const {id}=useParams();

    const[user, setUser]=useState({
        registrationnumber:"",
        name:"",
        firstname:"",
        lastname:"",
        email:""


    });

    const{registrationnumber, firstname,lastname,email}=user

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
    };

    useEffect(()=> {
        loadUser();
    },[]

    );



    const onSubmit=async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8082/user/${id}`,user);
        navigate("/");
         

    };

    const loadUser = async () =>{
        const result=await axios.get(`http://localhost:8082/user/${id}`);
        setUser(result.data);
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-light">
                <h2 className="text-Center">Edit Student</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                
                <br></br>
                <div className=" mb-3">
                    <label htmlFor="Registrationnumber" className="form-label" >
                        Registration Number
                   </label>
                   <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter your registration number"
                   name="Registrationnumber"
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
                   name="lastnamer"
                   value={lastname}
                   onChange={(e)=>onInputChange(e)}/>
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
