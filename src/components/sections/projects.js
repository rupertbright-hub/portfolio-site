import React from 'react'
import Fade from 'react-reveal/Reveal';
import newprojects from '../../config';
import ZappLaptop from './desktop.svg';
import CycleFlow from './tablet.svg';
import WePractice2 from './WePractice2.png';
import Cactous from './Cactous.png';
import {Folder} from '../../assets/icons';


let technology = newprojects.techicons

function projects(windowSize) {
const window = Object.values(windowSize)
// console.log('projects', window)


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
                <div className='project-image-large'>
                    <img alt='laptop' src={WePractice2}/>
                </div>
                <div className='project-description-right'>
                <div className='project-description-feature'>
                <h2>featured project</h2>
                <h1>WePractice</h1>
                </div>
                <p>WePractice is a website that connects therapists to those seeking professional mental healthcare support. Users can search for therapists and book appointments, while Therapists can amend their profiles to ensure they website is showing the latest information.</p>
                </div>
            </div>
            <div className='project-profile'>
                <div className='project-image'>
                    <img alt='laptop' src={Cactous}/>
                </div>
                <div className='project-description-left'>
                <div className='project-description-feature'>
                <h2>featured project</h2>
                <h1>Cactous</h1>
                </div>
                <p>Cactous promotes and facilitates the acquisition of residential property in Switzerland. The application allows for potential buyers to see their mortage suitabilty with applications then being sent directly to advisors at Migros Bank .</p>
                </div>
            </div>
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
    

                <div className='project-profile'>
                <div className='project-image'>
                    <img alt='laptop' src={CycleFlow}/>
                </div>
                <div className='project-description-left'>
                <div className='project-description-feature'>
                <h2>featured project</h2>
                <h1>CycleFlow</h1>
                </div>
                <p>Cycling web app that allows users to log and flag issues on London
cycle routes through the Twitter API. Users can send issues to
CycleFlow twitter account which is fetched and rendered onto the
app dashboard.</p>
                </div>
            </div>
            
      
        <div className='projects-section'>
        <Fade delay={2000} cascade bottom>
        <div className='projects-container'>
    {newprojects.projects.map((project, index) => {
        return (
            <a className='transform' style={{textDecoration:'none'}} href={project.website}>
            <div >
            <div className='project-div'>
            <div className='githubicon'>
            <h1>{project.name}</h1>
            <div><Folder/></div>
            </div>
            <p>{project.position}</p>
            <p>{project.title}</p>
            <p>{project.description}</p>
            {project.techStack.map((tech,index) => 
                <img alt='icons' style={{height:'30px', width:'30px', margin:'20px 0px 0px 10px'}}src={techIcon(tech)}/>)}
            </div> 
            </div>
            </a>
            )})}
        </div>
        </Fade>
        </div>
        </div>
    )
}

export default projects
