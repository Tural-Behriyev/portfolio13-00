import React from "react";
import Typed from 'react-typed';
import backgroundImage from "../img/laptop.jpg";

const Header =() => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
            <Typed
                strings={[
                    'Front End Devoloper',
                    'IT',
                    'Back End Devoloper']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"loop >
                    <input type="text"/>
                </Typed>

            </div>
        </div>
    )
}

// import React from 'react'

// const Header = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

export default Header
