import React from "react";
import './header.scss';

import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mx-5">
                    <li className="nav-item">
                        <Link className="nav-link header-title" to="/" >StarDB</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/characters/" >Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets/" >Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships/" >Starships</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;