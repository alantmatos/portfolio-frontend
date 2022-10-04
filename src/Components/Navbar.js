import React from 'react';
import '../Css/navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navMenu">
      <h1 className='alan'>Alan T. Matos</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <div className="dot"></div>
    </nav>
  )
}

export default Navbar