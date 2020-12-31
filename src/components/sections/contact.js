import React from 'react'
import {LinkedIn, GitHub} from '../../assets/icons';


function contact() {
    return (
        <div id='contact' className='contact-container'>
        <div className='contact-description'>
        <h1>Let's work together!</h1>
        <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <button>Get in Touch</button>
        <div className='contact-icons'>
            <a href='https://www.linkedin.com/in/rbrightb/'><LinkedIn/></a>
            <a href='https://github.com/rupertbright-hub'><GitHub/></a>
        </div>
        <p className='signature'>Designed and Built by Rupert Bright</p>
        </div>
        </div>
    )
}

export default contact
