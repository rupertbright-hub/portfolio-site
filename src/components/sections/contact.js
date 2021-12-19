import React from 'react'
import {LinkedIn, GitHub} from '../../assets/icons';


function contact() {


    
    return (
        <div id='contact' className='contact-container'>
        <div className='contact-description'>
        <h1>Let's work together!</h1>
        <p>Whether you have a question or just want to say hi then feel free to get in touch via e-mail or on Linkedin.</p>
        <a href="mailto:rupert.bright@live.co.uk"><button>Get in Touch</button></a>
        <div className='contact-icons'>
            <a  href='https://www.linkedin.com/in/rbrightb/'><LinkedIn/></a>
            <a  href='https://github.com/rupertbright-hub'><GitHub/></a>
        </div>
        <p className='signature'>Designed and Built by Rupert Bright</p>
        </div>
        </div>
    )
}

export default contact
