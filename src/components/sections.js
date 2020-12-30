import React, {useState, useEffect} from 'react'
import window from 'global'
import { Contact, About, Landing, Projects} from './sections/index'


function Sections() {

const [windowWidth, setWindowWidth] = useState();
const [windowSize, setWindowSize] = useState();

    useEffect(() => {
        window.addEventListener("resize", () => {
          setWindowSize(window.innerWidth);
        });
      });

      useEffect(() => {
          setWindowWidth(window.innerWidth);
        });


    //   console.log(windowWidth)
    //   console.log(windowSize)



    return (
        <div className='layout-container'>      
        <Landing windowWidth={windowWidth} windowSize={windowSize}/>
        <About/>
        <Projects windowWidth={windowWidth} windowSize={windowSize}/>
        <Contact/>
        </div>
    )
}

export default Sections
