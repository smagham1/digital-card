import React from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footerContainer'>
            <p>
                <a href="https://www.facebook.com" target="_blank">
                    <FaFacebookSquare className='faceB'/> 
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <FaInstagramSquare className='instaG'/> 
                </a>
                    <a href="https://github.com/smagham1" target="_blank">
                    <FaGithubSquare className='gitH' />
                </a>
            </p>
        </div>
    )
}


export default Footer