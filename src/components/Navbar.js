import React from 'react'
import logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();

  return (
    <div>
        <div>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
            <img src={logo} alt="logo"className="align-text-top mx-3" width="50" height="50"/>
                <a className="navbar-brand" href="/">Lekha</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==="/"?"active":" "}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==="/analytics"?"active":" "}`} to="/analytics">Analytics</Link>
                    </li>
                </ul>
                </div>
            </div>
         </nav>
      </div>
    </div>
  )
}

export default Navbar