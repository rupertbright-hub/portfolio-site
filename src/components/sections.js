import React from 'react'
import { Contact, About, Landing, Projects} from './sections/index'

function sections() {
    return (
        <div className='layout-container'>      
        <Landing/>
        <About/>
        <Projects/>
        <Contact/>
        </div>
    )
}

export default sections
