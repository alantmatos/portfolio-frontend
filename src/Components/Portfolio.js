import React from 'react'
import { useState, useEffect } from 'react'

const Portfolio = () => {

  const [ projects, setProjects ] = useState ([]);

  useEffect(()=>{ fetchData() },[])

  const fetchData = () => {
    fetch('http://localhost:3000/projects')
    .then(data => data.json())
    .then(data => setProjects(data))
  }
  console.log(projects)


  const renderProjects = projects.map(project=> { 
    return (
    <div className='project-info' key={project.id}>
      <h2>{project.project_name} </h2> <br></br> <br></br>
      <h4>{project.project_languages} </h4> <br></br><br></br>
      <h4>{project.project_description} </h4>
      <img src={project.project_images.map(image => image.image_link)} className="project-image"></img>
    </div>
    )})




  return (
    <div className='portfolio'>

      {renderProjects}
    
    </div>
  )
}

export default Portfolio


