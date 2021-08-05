import React from 'react';
import {Link} from "react-router-dom";
import './NavbarLogo.scss'

const NavbarLogo = () => {
    return(
        <div className="logo">
            <h3>
                <Link to={'/'}>Filmix</Link>
            </h3>
        </div>
    );
}

export default NavbarLogo;