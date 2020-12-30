import React, { useState, useEffect } from 'react'
import { Contact, About, Landing, Projects} from './sections/index'


function Sections() {

    const [windowSize, setWindowSize] = useState();

useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    });

    return (
        <div className='layout-container'>      
        <Landing windowSize={windowSize}/>
        <About/>
        <Projects windowSize={windowSize}/>
        <Contact/>
        </div>
    )
}

export default Sections
