import React from 'react';
import { Link } from 'react-router-dom';
function Nav()
{
    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">

            <Link className="navbar-brand" to="/">
                <img src="./images/vision.jpg" alt="logo" className="rounded-circle" style={{ width: "40px" }} />
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">Why me?</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/features">Know more me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                {/* <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/features" data-toggle="dropdown">
                        Who am I</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/features">Programmer</Link>
                        <Link className="dropdown-item" to="/features">Arts</Link>
                        <Link className="dropdown-item" to="/features">Music</Link>
                    </div>



                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact me</Link>
                </li>
            </ul>
        </nav >


    );
}
export default Nav;
