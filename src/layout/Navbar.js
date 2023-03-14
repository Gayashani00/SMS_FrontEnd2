//get this use shortcut rfc
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-center" href="#">Student Management System</a>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <Link className="btn btn-outline-light bg-outline-light" to="/menu">Menu</Link>
    <Link className="btn btn-outline-light bg-outline-light" to="/">Results</Link>
    <Link className="btn btn-outline-light bg-outline-success" to="/addStudents">Add Student</Link>
   
  </div>
</nav>



    </div>
  )
}
