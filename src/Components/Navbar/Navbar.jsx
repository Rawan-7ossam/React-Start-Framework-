import React from 'react'
import { Link ,NavLink } from 'react-router-dom'
import './Navbar.css'
import About from '../About/About'
export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg">
  <div className="container py-3 ">
    <Link className="navbar-brand text-uppercase fw-bolder fs-2 text-white" to="">start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <NavLink className="nav-link text-white text-uppercase fw-bolder" aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase fw-bolder" to="portfolio">portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase fw-bolder" to="contact">contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}
