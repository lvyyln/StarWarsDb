import React from 'react';
import {Link} from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#/">
                    StarDB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/people/">
                        <a href="#/people/">People</a>
                    </Link>
                </li>
                <li>
                    <Link to="/planets/">
                        <a href="#/planets/">Planets</a>
                    </Link>
                </li>
                <li>
                    <Link to="/starships/">
                        <a href="#/starships/">Starships</a>
                    </Link>
                </li>
                <li>
                    <Link to="/secret">
                        <a href="#/starships/">Secret</a>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <a href="#/starships/">Login</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;