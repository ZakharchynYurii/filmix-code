import React from 'react';
import {Link} from 'react-router-dom';
import './NavbarLinks.scss';

const NavbarLinks = () => {
    return(
        <div className="links">
            <ul>
                <li>
                    <Link to="/">Top films</Link>
                </li>
                <li>
                    <Link to="/all-films">Search films</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavbarLinks;