import React from 'react'
import Fade from 'react-reveal/Reveal';
import newprojects from '../../config';
import ZappLaptop from './desktop.svg';
import CycleFlow from './tablet.svg';
import {Folder} from '../../assets/icons';


let technology = newprojects.techicons

function projects(windowSize) {
const window = Object.values(windowSize)
console.log('projects', window)


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
        <h1 className='title' id='projects'>Projects</h1>
            <div className='project-profile'>
                <div className='project-image'>
                    <img alt='laptop' src={ZappLaptop}/>
                </div>
                <div className='project-description-right'>
                <div className='project-description-feature'>
                <h2>featured project</h2>
                <h1>Zapp</h1>
                </div>
                <p>Zapp is an app for managing issues in the software development lifecycle. Zapp is designed with small teams in mind and aims to make issue tracking simple and straightforward.</p>
                </div>
            </div>
            { window[0] > 1117 || window[0] === 'undefined' ? (
            <div className='project-profile'>
                <div className='project-description-left'>
                <h2>featured project</h2>
                <h1>Zapp</h1>
                <p>Zapp is an app for managing issues in the software development lifecycle. Zapp is designed with small teams in mind and aims to make issue tracking simple and straightforward.</p>
                </div>
                <div className='project-image'>
                    <img alt='laptop' src={CycleFlow}/>
                </div>
            </div> ) : (
                <div className='project-profile'>
                <div className='project-image'>
                    <img alt='laptop' src={CycleFlow}/>
                </div>
                <div className='project-description-right'>
                <div className='project-description-feature'>
                <h2>featured project</h2>
                <h1>Zapp</h1>
                </div>
                <p>Zapp is an app for managing issues in the software development lifecycle. Zapp is designed with small teams in mind and aims to make issue tracking simple and straightforward.</p>
                </div>
            </div>
            )}
      
        <div className='projects-section'>
        <Fade delay={2000} cascade bottom>
        <div className='projects-container'>
    {newprojects.projects.map((project, index) => {
        return (
            <div className='transform'>
            <div className='project-div'>
            <div className='githubicon'>
            <h1>{project.name}</h1>
            <div><Folder/></div>
            </div>
            <p>{project.position}</p>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <div className='technology-icons'>
            {project.techStack.map((tech,index) => 
                <img alt='icons' style={{height:'35px', width:'35px'}}src={techIcon(tech)}/>)}
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
