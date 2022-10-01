import React from 'react';
import { useState } from 'react';
import '../Css/home.css';

const Home = () => {

  const [displaycontact, setDisplaycontact] = useState(false);

  const manageDisplay = () => {
    setDisplaycontact(!displaycontact)
  }


  return (
    <div className='home-container'>

      <button className='home-btn' onClick={() => { manageDisplay() }} > Let's Work Together </button>

      {displaycontact ? <div className='display-contact'>
        <div className='contact-info'>
          <h4>mr.alanmatos@hotmail.com</h4>
          <h5>+1 929-895-1957</h5>
          <a href="https://docs.google.com/document/d/1irITA5YLrJ_oSdZyekYTLvdqinvSC3ifHY4lYk8fMMg/edit?usp=sharing"> My Resume </a>
        </div>
      </div> : null}

      <div className='hero'>
        <div><h1>Hey, I'm Alan,</h1></div>
        <div><h1>a dedicated</h1></div>
        <div><span className='dev'>Full Stack Software Engineer</span>.</div>
      </div>

    </div>

  )
}

export default Home