import React from "react";
import Typed from 'react-typed';
import cv from '../fakeCV.pdf'

const Header =() => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
            <h1>Web devolopment and service managment</h1>
            <Typed
            className='typed-text'
                strings={[
                    'Front End Devoloper',
                    'IT',
                    'Back End Devoloper']}
                    typeSpeed={40}
                    backSpeed={50}
                   loop >
                </Typed>
                <a href={cv} download className="downloadCV"> CV-mi endir </a> 
            </div>
        </div>
    )
}



export default Header
