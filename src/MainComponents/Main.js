import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

function Main() {

    return (
        <div className='mainContainer'>
            <div>
                <h1>Sam Magham</h1>
                <p className='FrontEnd'>Frontend Developer</p>
                <p className='website'>Sammagham.website</p>
            </div>
            <div>
                <a className="mailto" href="mailto:contact@test.com">
                <button className='email' > 
                        <HiMail className='emails'/>  Email
                </button>
                </a>
                <a href="https://www.linkedin.com/in/sam-magham/" target="_blank">
                <button className='linkedIn'><BsLinkedin className='linkedIns'/>  LinkedIn</button>
                </a>
            </div>
            <div>
                <h3>About</h3>
                <p className='paragraphs'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p className='paragraphs'> Coder. Traveller. Law Graduate. Surfer. Photographer.</p>
            </div>
        </div>
    )
}


export default Main