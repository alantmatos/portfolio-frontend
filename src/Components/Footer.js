import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
    
    <div className='footer-content'>
      <h3> Alan T Matos</h3>
      <p> expect something here... </p>
      <ul className='socials'>
        <li><a href="https://www.linkedin.com/in/alantmatos/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
        <li><a href="https://www.instagram.com/sir._.robot/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
        <li><a href="https://www.facebook.com/alantmatos/"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a> </li>

      </ul>
    </div>

    <div className='footer-bottom'>
      <p> copyright @2020 ... more data</p>

    </div>


    </div>
  )
}

export default Footer


// fa icons