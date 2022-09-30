import React from 'react'
import Modal from './Modal';
import { useState, useEffect } from 'react';
import '../Css/portfolio.css';

const Portfolio = () => {

  const [projects, setProjects] = useState([]);
  const [displayModal, setdisplayModal] = useState(false);
  const [displayProjects, setdisplayProjects] = useState(true);


  useEffect(() => { fetchData() }, [])

  const fetchData = () => {
    fetch('http://localhost:3000/projects')
      .then(data => data.json())
      .then(data => setProjects(data))
  }

  // { projects ? projects.map(project => project.project_images.map(image => console.log(image.image_link)) ) : console.log("no data")}
  const manageDisplay = (e) => {
    console.log(e)
    // setdisplayModal(!displayModal)
    // setdisplayProjects(!displayProjects)
  }

  const renderProjects = projects.map(project => {
    return (
      <div className='project-info' key={project.id} onClick={(e) => manageDisplay(e)}>
        <h2>{project.project_name} </h2>
        <div className='project-lang'><h4>{project.project_languages} </h4></div>
        <div className='project-description'><h4>{project.project_description} </h4></div>
        <img className="project-cover" src={project.project_cover}></img>
      </div>
    )
  })




  return (
    <>
      {displayModal ? <Modal></Modal> : null}

      <div className='portfolio'>
        {displayProjects ? renderProjects : null}
      </div>
    </>
  )
}

export default Portfolio


