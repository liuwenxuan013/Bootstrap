import React from 'react';
import { Link } from 'react-router-dom';
function Nav()
{
    return (

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">

            <Link class="navbar-brand" to="/">
                <img src="./images/vision.jpg" alt="logo" class="rounded-circle" style={{ width: "40px" }} />
            </Link>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">Why me?</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/features">Know more me</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/profile">Profile</Link>
                </li>
                {/* <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="/features" data-toggle="dropdown">
                        Who am I</Link>
                    <div class="dropdown-menu">
                        <Link class="dropdown-item" to="/features">Programmer</Link>
                        <Link class="dropdown-item" to="/features">Arts</Link>
                        <Link class="dropdown-item" to="/features">Music</Link>
                    </div>



                </li> */}
                <li class="nav-item">
                    <Link class="nav-link" to="contact">Contact me</Link>
                </li>
            </ul>
        </nav >


    );
}
export default Nav;
