import React from 'react'
import logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();

  return (
    <div>
        <div>
        <nav className="bg-blue-600 text-white">
          <div className="container mx-10 flex align-left items-center p-4">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="h-12 w-12 mr-3" />
              <a className="text-xl" href="/">Lekha</a>
            </div>
            <div className="flex align-center pl-10 md:space-x-5 text-xl">
              <Link className={`nav-link ${location.pathname === "/" ? "text-white" : "text-gray-400"} hover:text-white`} to="/">Home</Link>
              <Link className={`nav-link ${location.pathname === "/analytics" ? "text-blue-500" : "text-gray-200"} hover:text-blue-300`} to="/analytics">Analytics</Link>
            </div>
          </div>

</nav>

      </div>
    </div>
  )
}

export default Navbar