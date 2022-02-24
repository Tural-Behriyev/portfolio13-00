import React from "react";
import Typed from 'react-typed';


const Header =() => {
    return (
        <div className="header">
            <div className="info">
            <div className="text-1">Hello,my name is</div>
            <div className="text-2">Tural Behriyev</div>
            <div className="text-3">And I'm a <span class="static-text"></span></div>
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
                <a className="CV">My CV</a> 
            </div>
        </div>
    )
}



export default Header
