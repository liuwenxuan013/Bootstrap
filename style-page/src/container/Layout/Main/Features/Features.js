import React from 'react';
import Clock from '../../../../components/Clock/Clock';
import Converter from '../../../../components/Converter/Converter';
import AdventureCard from '../../../../components/AdventureCard/AdventureCard';

function Features()
{

    return (


        <div data-spy="scroll" data-target=".navbar" data-offset="50" style={{ margin: 0 }}>

            <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#section1">Programming</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section2">Adventure</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section3">Arts</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Others
      </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#section41">Movies</a>
                            <a class="dropdown-item" href="#section42">Music</a>
                        </div>
                    </li>
                </ul>
            </nav>

            <div id="section1" class="container-fluid bg-info" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Programming</h1>
                <p>A Web Developer not only plays a crucial role in Web design, development,
                    testing, operation, and support, but also has a great influence on marketing
                     and users retention. The deliverables created help clients be more efficient
                      and provide better services in this increasingly competitive market. </p>
                <p>I believe my experience and expertise in software development will be a valuable
                    resource in accomplishing these goals.</p>
                <hr />
                <h4>Play widget</h4>
                <Clock />
                <hr />
                <Converter />

            </div>
            <div id="section2" class="container-fluid bg-warning" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Adventure</h1>
                <p>Adventure isn’t hanging off a rope on the side of a mountain or living among lions. Adventure is an attitude to experience everyday things.</p>
                <p>Life is short and the world is wide...</p>
                <div class='row'>
                    <div class="col-sm-3" style={{ backgroundColor: "lavender" }}>
                        <AdventureCard title="us" />
                    </div>
                    <div class="col-sm-3" style={{ backgroundColor: "lavenderblush" }}>.col-sm-3</div>
                    <div class="col-sm-3" style={{ backgroundColor: "lavender" }}>.col-sm-3</div>
                    <div class="col-sm-3" style={{ backgroundColor: "lavenderblush" }}>.col-sm-3</div>


                </div>
            </div>
            <div id="section3" class="container-fluid bg-danger" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Arts</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>
            <div id="section41" class="container-fluid bg-secondary" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Movies</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>
            <div id="section42" class="container-fluid bg-success" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Music</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>

        </div >


    );
}
export default Features;