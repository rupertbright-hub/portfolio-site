import React from 'react'
import Fade from 'react-reveal/Reveal';
import newprojects from '../../config';
import ZappLaptop from './zapp1.png';


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
        
        <div className='projects-section'>
        <h1 id='projects' style={{color:'$text-color',textAlign:'center'}}>Projects</h1>
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
                <img alt='icons' style={{height:'45px', width:'45px'}}src={techIcon(tech)}/>)}
                </div>
            </div> 
            </div>
            )})}
        </div>
        </Fade>
        </div>
        <div className='project-container'>
            <div className='project-profile'>
                <div className='project-image'>
                    <img alt='laptop' src={ZappLaptop}/>
                </div>
                <div className='project-description'>
                <h2>featured project</h2>
                <h1>Zapp</h1>
                <p>Zapp is an app for managing issues in the software development lifecycle. Zapp is designed with small teams in mind and aims to make issue tracking simple and straightforward.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default projects
