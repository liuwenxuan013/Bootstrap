import React from 'react';
import Clock from '../../../../components/Clock/Clock';
import Converter from '../../../../components/Converter/Converter';
import AdventureCard from '../../../../components/AdventureCard/AdventureCard';
import ArtsCard from '../../../../components/ArtsCard/ArtsCard';
import ToggleButton from '../../../../components/ToggleButton/ToggleButton';
import Movies from '../../../../components/Movies/Movies';
import Music from '../../../../components/Music/Music';
import Companies from '../../../../components/Companies/Companies';
import {Link, Route, Switch} from 'react-router-dom';
import 'bootstrap';

function Features()
{
    return (<div>



        <div data-spy="scroll" data-target=".navbar" data-offset="50" style={{ margin: 0 }}>
            <nav class="navbar navbar-expand-sm justify-content-center bg-info navbar-light ">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#programming">Programming</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#adventure">Adventure</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#arts">Arts</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Others</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#movies">Movies</a>
                            <a class="dropdown-item" href="#music">Music</a>
                        </div>
                    </li>
                </ul>
            </nav>

            <div id="programming" class="container-fluid bg-info" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h3  >Programming</h3>
                <blockquote className="blockquote" style={{padding:"15px 50px"}} >
                <p>A Web Developer not only plays a crucial role in Web design, development,
                    testing, operation, and support, but also has a great influence on marketing
                     and users retention. The deliverables created help clients be more efficient
                      and provide better services in this increasingly competitive market. </p>
                <p>I believe my experience and expertise in software development will be a valuable
                    resource in accomplishing these goals.</p>
                </blockquote>
                <hr />
                <h5 style={{textAlign:"center", color:"#a5e7f3"}}>~ Play with Widgets ~</h5>
                <Clock />
                <hr />
                <Converter />
                <hr />
                <div id="accordionProgramming">
                    <div class="card bg-info" style={{margin: 0, border: "none", padding: 0}}>
                        <a class="card-link"
                           data-toggle="collapse"
                           href="#collapseProgramming"
                           style={{ marginLeft:"44%",width:"120px"}}>

                            <ToggleButton />
                        </a>
                        <div id="collapseProgramming" class="collapse" data-parent="#accordionProgramming">
                            <div class="card-body" >
                                <Companies />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="adventure" class="container-fluid bg-warning" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h3>Adventure</h3>
                <blockquote className="blockquote" style={{padding:"15px 50px"}} >
                    <p>Adventure isn’t hanging off a rope on the side of a mountain or living among lions. Adventure is an attitude to experience everyday things.</p>
                    <p>Life is short and the world is wide...</p>
                </blockquote>



                <div id="accordionAdventure">
                    <div class="card bg-warning" style={{ margin: 0, border: "none", padding: 0, }} >
                        {/* <div class="card-header" style={{ margin: 0, border: "none", padding: 0, }}> */}
                        <a class="card-link" data-toggle="collapse" href="#collapseAdventure"
                           style={{ marginLeft:"44%",width:"120px"}}>
                            < ToggleButton show='true' />
                        </a>

                        {/* </div> */}
                        <div id="collapseAdventure" class="collapse show" data-parent="#accordionAdventure">
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
            <div id="arts" class="container-fluid bg-danger" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <Route  path="/features#arts"  >  <h3>Arts</h3></Route>

                <blockquote className="blockquote" style={{padding:"15px 50px 0"}} >
                    <p>"  Art enables us to find ourselves and lose ourselves at the same time.  "</p>
                    <footer className="blockquote-footer" style={{color:"#f5bcc4"}}>Thomas Merton</footer>
                </blockquote>
                <blockquote className="blockquote" style={{padding:"0  50px 15px"}} >
                    <p>"  To practice any art, no matter how well or how badly, is a way to make your soul grow, for heaven’s sake. So do it.  "</p>
                    <footer className="blockquote-footer" style={{color:"#f5bcc4"}}>Kurt Vonnegut</footer>
                </blockquote>

                <br />
                <p style={{padding:"0 50px "}} >
                    I think of art as the highest level of creativity. To me, it is one of the greatest sources of enjoyment</p>
                <div id="accordionArts">
                    <div class="card bg-danger" style={{ margin: 0, border: "none", padding: 0, }} >
                        <a class="card-link" data-toggle="collapse" href="#collapseArts"
                           style={{ marginLeft:"44%",width:"120px"}}>
                            <ToggleButton show='true' />
                        </a>
                        <div id="collapseArts" class="collapse show" data-parent="#accordionArts">
                            <div class="card-body">
                                <ArtsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="movies" class="container-fluid bg-secondary" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h3>Movies</h3>
                <blockquote className="blockquote" style={{padding:"15px 50px"}} >
                <p>"  The whole of life is just like watching a film. Only it's as though you always get in ten minutes after the big picture has started, and no-one will
                    tell you the plot, so you have to work it out all yourself from the clues.  " </p>
                    <footer className="blockquote-footer" style={{color:"lightGray"}}>Terry Pratchett</footer>

                </blockquote>
                <div id="accordionMovies">
                    <div class="card bg-secondary" style={{ margin: 0, border: "none", padding: 0, }}>
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseMovies"
                           style={{ marginLeft:"44%",width:"120px"}}>
                            <ToggleButton  />
                        </a>
                        <div id="collapseMovies" class="collapse" data-parent="#accordionMovies">
                            <div class="card-body">
                                <Movies />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="music" class="container-fluid bg-success" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h3>Music</h3>
                <blockquote className="blockquote" style={{padding:"15px 50px"}} >
                    <p>“  After silence, that which comes nearest to expressing the inexpressible is music. ” </p>
                    <footer className="blockquote-footer" style={{color:"lightGray"}}>Aldous Huxley</footer>
                </blockquote>
            <div id="accordionMusic">
                <div className="card bg-success" style={{margin: 0, border: "none", padding: 0,}}>
                    <a className="collapsed card-link" data-toggle="collapse" href="#collapseMusic"
                       style={{ marginLeft:"44%",width:"120px"}}>
                        <ToggleButton  />
                    </a>
                    <div id="collapseMusic" className="collapse" data-parent="#accordionMusic">
                        <div className="card-body">
                            <Music />
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </div>
        </div>

    );
}
export default Features;
