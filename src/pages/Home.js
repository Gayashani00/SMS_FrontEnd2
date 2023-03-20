import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Home() {

    const[users,setUsers] =useState([]);


    const {id}=useParams()

    useEffect(() => {
        loadusers();

    },[]

    );

    const loadusers =async() =>{
        const result=await axios.get("http://localhost:8084/users");
        setUsers(result.data);

    };

    const deleteuser=async (id)=>{
      await axios.delete(`http://localhost:8084/user/${id}`)
      loadusers();
    };

  return (
    <div className="container">
        <div className="py-4">
        <table class="table border shadow table-dark table-striped ">
        <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Registration Number</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
      
      
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.registrationnumber}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.email}</td>
      <td>
        {/* <Link className="btn btn-outline-primary mx-2"
        to={`/ViewStudents/${user.id}`}
        >View</Link> */}
        <Link className="btn btn-outline-success mx-2"
        to={`/EditStudents/${user.id}`}
        
        >Edit</Link>
        <button className="btn btn-outline-danger mx-2"
        onClick={() => deleteuser(user.id)}
        >Delete</button>
      </td>
      
    </tr>

        ))
    }
    
    
  </tbody>
</table>

        </div>
    </div>
  )
}
