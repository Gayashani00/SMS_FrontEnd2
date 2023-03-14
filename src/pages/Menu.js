import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='py-4'>
        <h1 className='title'>Menu</h1>
        <div className='container py-5'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            <div className='col'>
                <div className="card border-primary md-3 h-200">
                <img className="card-img-top-add rounded mx-auto d-block" src='./add.png' alt="Add Students"/>
                <div className="card-body">
                    <Link to="/addstudent" className="btn btn-primary">Add Student</Link>
                </div>
                </div>
            </div>
            <div className='col'>
                <div className="card border-primary md-3 h-200">
                <img className="card-img-top" src="./Images/add.png" alt="View Students"/>
                <div className="card-body">
                <Link to="/studentdetails" className="btn btn-primary">View Students</Link>
                </div>
                </div>
            </div>
            
            {/* <div className='col'>
                <div className="card border-primary md-3 h-100">
                <img className="card-img-top" src='./images/system-image.jpg' alt="Card image cap"/>
                <div className="card-body">
                    <Link to='/log' className="btn btn-primary">System Log</Link>
                </div>
                </div>
            </div> */}
        </div>
        </div>
    </div>
  )
}