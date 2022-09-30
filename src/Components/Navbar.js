import React from 'react';
import '../Css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navMenu">
      <h1 className='alan'>Alan T. Matos</h1>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
      <div className="dot"></div>
    </nav>
  )
}

export default Navbar