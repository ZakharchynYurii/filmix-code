import React from 'react';
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarLinks from "./NavbarLinks/NavbarLinks";

import './Navbar.scss';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-wrapper">
                    <NavbarLogo />
                    <NavbarLinks />
                </div>
            </div>
        </div>
    );
}

export default Navbar;