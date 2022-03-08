import React from 'react'
import { NavLink } from 'react-router-dom';


const Head = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
           
        <li className="nav-item">
          <NavLink className="nav-link" to="/SignupForm">SignupForm</NavLink>
        </li>
           
        <li className="nav-item">
          <NavLink className="nav-link" to="/LoginForm">LoginForm</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Head;