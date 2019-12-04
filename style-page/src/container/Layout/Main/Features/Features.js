import React from 'react';
import Clock from '../../../../components/Clock/Clock';
import Converter from '../../../../components/Converter/Converter';
import AdventureCard from '../../../../components/AdventureCard/AdventureCard';
import ArtsCard from '../../../../components/ArtsCard/ArtsCard';
import ToggleButton from '../../../../components/ToggleButton/ToggleButton';
import Movies from '../../../../components/Movies/Movies';
import Music from '../../../../components/Music/Music';
import People from '../../../../components/People/People';
import Companies from '../../../../components/Companies/Companies';

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
                <hr />
                <div id="accordion">
                    <div class="card bg-info" style={{margin: 0, border: "none", padding: 0,}}>
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                            <ToggleButton/>
                        </a>
                        <div id="collapseFive" class=" row collapse" data-parent="#accordion">
                            <div class=" card-body " >
                                <Companies />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="section2" class="container-fluid bg-warning" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Adventure</h1>
                <blockquote className="blockquote">
                    <p>Adventure isn’t hanging off a rope on the side of a mountain or living among lions. Adventure is an attitude to experience everyday things.</p>
                    <p>Life is short and the world is wide...</p>
                </blockquote>



                <div id="accordion">
                    <div class="card bg-warning" style={{ margin: 0, border: "none", padding: 0, }} >
                        {/* <div class="card-header" style={{ margin: 0, border: "none", padding: 0, }}> */}
                        <a class="card-link" data-toggle="collapse" href="#collapseOne">
                            < ToggleButton show='true' />
                        </a>
                        {/* </div> */}
                        <div id="collapseOne" class="collapse show" data-parent="#accordion">
                            <div class="card-body">

                                <div class='row'>
                                    <div class="col-sm-3 bg-warning" >
                                        <AdventureCard title="us" />
                                    </div>
                                    <div class="col-sm-3 bg-warning" >
                                        <AdventureCard title="canada" />
                                    </div>
                                    <div class="col-sm-3 bg-warning" >
                                        <AdventureCard title="china" />
                                    </div>
                                    <div class="col-sm-3 bg-warning" >
                                        <AdventureCard title="france" />
                                    </div>
                                </div>
                                <div class='row' style={{ marginTop: "10px" }}>
                                    <div class="col-sm-3 bg-warning" >
                                        <AdventureCard title="switzerland" />
                                    </div>
                                    <div class="col-sm-3 bg-warning" >
                                        <AdventureCard title="germany" />
                                    </div>
                                    <div class="col-sm-3 bg-warning" >
                                        <AdventureCard title="austria" />
                                    </div>
                                    <div class="col-sm-3 bg-warning" >
                                        <AdventureCard title="italy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section3" class="container-fluid bg-danger" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Arts</h1>

                <blockquote className="blockquote">
                    <p>Art enables us to find ourselves and lose ourselves at the same time.</p>
                    <footer className="blockquote-footer">From Thomas Merton</footer>
                </blockquote>
                <blockquote className="blockquote">
                    <p>To practice any art, no matter how well or how badly, is a way to make your soul grow, for heaven’s sake. So do it.</p>
                    <footer className="blockquote-footer">From Kurt Vonnegut</footer>
                </blockquote>

                <br />
                <p>I think of art as the highest level of creativity. To me, it is one of the greatest sources of enjoyment</p>
                <div id="accordion">
                    <div class="card bg-danger" style={{ margin: 0, border: "none", padding: 0, }} >
                        <a class="card-link" data-toggle="collapse" href="#collapseTwo">
                            <ToggleButton show='true' />
                        </a>
                        <div id="collapseTwo" class="collapse show" data-parent="#accordion">
                            <div class="card-body">
                                <ArtsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section41" class="container-fluid bg-secondary" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Movies</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>

                <div id="accordion">
                    <div class="card bg-secondary" style={{ margin: 0, border: "none", padding: 0, }}>
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                            <ToggleButton  />
                        </a>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                <Movies />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="section42" class="container-fluid bg-success" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h1>Music</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>

            <div id="accordion">
                <div className="card bg-success" style={{margin: 0, border: "none", padding: 0,}}>
                    <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                        <ToggleButton  />
                    </a>
                    <div id="collapseFour" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            <Music />
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </div>


    );
}
export default Features;
