import React, {useState, useEffect} from 'react'

import { Contact, About, Landing, Projects} from './sections/index'


function Sections() {

const [windowWidth, setWindowWidth] = useState();
 
useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    });

var windowSize = window.innerWidth;

    return (
        <div className='layout-container'>      
        <Landing windowSize={windowSize}/>
        <About/>
        <Projects windowWidth={windowWidth}/>
        <Contact/>
        </div>
    )
}

export default Sections
