import React from 'react'
import { useState, useEffect } from 'react';
import '../Css/portfolio.css';

const Portfolio = () => {

  const [projects, setProjects] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => { fetchData() }, [])

  // const fetchData = () => {
  //   fetch('http://localhost:3000/projects')
  //     .then(data => data.json())
  //     .then(data => setProjects(data))
  // }
  // const fetchData = () => {
  //   fetch('http://localhost:8001/project')
  //     .then(data => data.json())
  //     .then(data => setProjects(data))
  // };

  const fetchData = () => {
    fetch('https://zany-gray-cod-hat.cyclic.app/projects')
      .then(data => data.json())
      .then(data => setProjects(data))
  };

  const handleImageDisplay = (project) => {
    let limit = project.project_images.length;

    if (count <= limit - 1) {
      setCount(count + 1)
      let image = document.getElementById('active-image')
      image.setAttribute('src', project.project_images[count])
    } else {
      setCount(0)
    }
  }


  const renderProjects = projects.map(project => {
    return (
      <div className='project-info' key={project.id} >
        <div className='data-container'>
          <div className='project-name'><h2>{project.project_name} </h2></div>
          <div className='project-languages'><h4>{project.project_languages} </h4></div>
          <div className='project-description'><h4>{project.project_description} </h4></div>
          <div className='buttons'>
            {project.project_repo ? <a href={project.project_repo} target="_blank" rel="noreferrer"> <button className='portfolio-btn'> Demo </button></a> : null}
            {project.project_demo ? <a href={project.project_demo} target="_blank" rel="noreferrer"> <button className='portfolio-btn'> Github Repo </button></a> : null}
          </div>
        </div>
        <div className='images-container'>
          <div className="project-cover" ><img id="active-image" onClick={() => { handleImageDisplay(project) }} src={project.project_cover}></img></div>
        </div>
        {/* <div className='prints-container'> {project.project_images.map(image => { return (<div key={image} className='prints-frame'> <img className='prints' src={image}></img></div>) })}</div> */}
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


