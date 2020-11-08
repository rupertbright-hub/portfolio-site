import React from 'react'
import { Fade } from "react-awesome-reveal";


function projects() {
    return (
        <div>
        <h1 id='projects'>Projects</h1>
        <Fade cascade triggerOnce={true} delay={1000}>
        <div className='projects-container'>
        <div className='project-div'>Zapp</div>
        <div className='project-div'>CycleFlow</div>
        <div className='project-div'>Testing</div>
        <div className='project-div'>Protfolio Site</div>
        </div>
        </Fade>

        
        
        </div>
    )
}

export default projects
