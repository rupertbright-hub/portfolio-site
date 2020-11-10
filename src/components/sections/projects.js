import React from 'react'
import Fade from 'react-reveal/Reveal';
import newprojects from '../../config';




function projects() {
    return (
        <div>
        <h1 id='projects'>Projects</h1>
        <Fade delay={9000} cascade bottom>
        <div className='projects-container'>
    {newprojects.projects.map((project, index) => {
        return (
            <div className='project-div'>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <ul>
            {project.techStack.map((tech,index) => 
                <li>{tech}</li>)}
                </ul>
            </div> 
            )})}
        </div>
        </Fade>

        
        
        </div>
    )
}

export default projects
