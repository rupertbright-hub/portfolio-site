import React, {useState, useEffect} from 'react'
import window from 'global'
import { Contact, About, Landing, Projects} from './sections/index'


function Sections() {

const [windowWidth, setWindowWidth] = useState();
// const [windowSize, setWindowSize] = useState();
 
useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    });

    // useEffect(() => {
    //     window.addEventListener("load", () => {
    //       setWindowWidth(window.innerWidth);
    //     });
    //   });

let windowSize = window.innerWidth

    return (
        <div className='layout-container'>      
        <Landing windowSize={windowSize} windowWidth={windowWidth}/>
        <About/>
        <Projects windowSize={windowSize}/>
        <Contact/>
        </div>
    )
}

export default Sections
