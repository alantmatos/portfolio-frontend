import React from 'react';
import { useState } from 'react';
import '../Css/home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  const [displaycontact, setDisplaycontact] = useState(false);

  const manageDisplay = () => {
    setDisplaycontact(!displaycontact)
  }


  return (
    <div className='home-container'>

      <Link to="/contact" className='home-btn'> Lets Work Together </Link>

      <div className='hero'>
        <div><h1>Hey, I'm Alan,</h1></div>
        <div><h1>a dedicated</h1></div>
        <div><span className='dev'>Full Stack Software Engineer</span>.</div>
      </div>

    </div>

  )
}

export default Home