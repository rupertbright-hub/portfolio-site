import React from 'react'
import Fade from 'react-reveal/Reveal';
import newprojects from '../../config';

let technology = newprojects.techicons


function projects() {

    const techIcon= (tech) => {
        for (let i in technology) {
            for(const [key, value] of Object.entries(technology[i])) {
                if (tech === key) {
                    return value;
                }
            }
            }
        }
        return (
        <div>
        <h1 id='projects'>Projects</h1>
        <div className='projects-section'>
        <Fade delay={2000} cascade bottom>
        <div className='projects-container'>
    {newprojects.projects.map((project, index) => {
        return (
            <div className='transform'>
            <div className='project-div'>
            <h1>{project.name}</h1>
            <p>{project.position}</p>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <div className='technology-icons'>
            {project.techStack.map((tech,index) => 
                <img style={{height:'45px', width:'45px'}}src={techIcon(tech)}/>)}
                </div>
            </div> 
            </div>
            )})}
        </div>
        </Fade>
        </div>
        </div>
    )
}

export default projects
