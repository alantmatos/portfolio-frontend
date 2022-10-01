import React from 'react'
import { useState, useEffect } from 'react';
import '../Css/portfolio.css';

const Portfolio = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => { fetchData() }, [])

  const fetchData = () => {
    fetch('http://localhost:3000/projects')
      .then(data => data.json())
      .then(data => setProjects(data))
  }


  const renderProjects = projects.map(project => {
    return (
      <div className='project-info' key={project.id} >
        <div className='data-container'>
          <div className='project-name'><h2>{project.project_name} </h2></div>
          <div className='project-languages'><h4>{project.project_languages} </h4></div>
          <div className='project-description'><h4>{project.project_description} </h4></div>
          <div className='buttons'>
            <button className='portfolio-btn'>  Demo </button>
            <button className='portfolio-btn'> Github Repo</button>
          </div>
        </div>
        <div className='images-container'>
          <div className="project-cover" ><img src={project.project_cover}></img></div>
        </div>
        <div className='prints-container'> {project.project_images.map(image => { return (<div key={image.id} className='prints-frame'> <img className='prints' src={image.image_link}></img></div>) })}</div>
      </div>
    )
  })




  return (
    <div className='portfolio'>
      {renderProjects}
    </div>
  )
}

export default Portfolio


