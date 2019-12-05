import React from 'react';
import Clock from '../../../../components/Clock/Clock';
import Converter from '../../../../components/Converter/Converter';
import AdventureCard from '../../../../components/AdventureCard/AdventureCard';
import ArtsCard from '../../../../components/ArtsCard/ArtsCard';
import ToggleButton from '../../../../components/ToggleButton/ToggleButton';
import Movies from '../../../../components/Movies/Movies';
import Music from '../../../../components/Music/Music';
import Companies from '../../../../components/Companies/Companies';
import 'bootstrap';

function Features()
{
    return (<div>
        <div data-spy="scroll" data-target=".navbar" data-offset="50" style={{ margin: 0 }}>
            <nav className="navbar navbar-expand-sm justify-content-center bg-info navbar-light ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#programming">Programming</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#adventure">Adventure</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#arts">Arts</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/features" id="navbardrop" data-toggle="dropdown">
                            Others</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#movies">Movies</a>
                            <a className="dropdown-item" href="#music">Music</a>
                        </div>
                    </li>
                </ul>
            </nav>

            <div id="programming" className="container-fluid bg-info" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h3> Programming </h3>
                <blockquote className="blockquote" style={{padding:"15px 50px"}} >
                <p>A Web Developer not only plays a crucial role in Web design, development,
                    testing, operation, and support, but also has a great influence on marketing
                     and users retention. The deliverables created help clients be more efficient
                      and provide better services in this increasingly competitive market. </p>
                <p>I believe my experience and expertise in software development will be a valuable
                    resource in accomplishing these goals.</p>
                </blockquote>
                <hr />
                <h5 style={{textAlign:"center", color:"#a5e7f3"}}> ~ Play with Widgets ~ </h5>
                <Clock />
                <hr />
                <Converter />
                <hr />
                <div id="accordionProgramming">
                    <div className="card bg-info" style={{margin: 0, border: "none", padding: 0}}>
                        <a className="card-link"
                           data-toggle="collapse"
                           href="#collapseProgramming"
                           style={{ marginLeft:"44%",width:"120px"}}>
                            <ToggleButton />
                        </a>
                        <div id="collapseProgramming" className="collapse" data-parent="#accordionProgramming">
                            <div className="card-body" >
                                <Companies />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="adventure" className="container-fluid bg-warning" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h3>Adventure</h3>
                <blockquote className="blockquote" style={{padding:"15px 50px"}} >
                    <p>Adventure isn’t hanging off a rope on the side of a mountain or living among lions. Adventure is an attitude to experience everyday things.</p>
                    <p>Life is short and the world is wide...</p>
                </blockquote>

                <div id="accordionAdventure">
                    <div className="card bg-warning" style={{ margin: 0, border: "none", padding: 0, }} >
                        {/* <div className="card-header" style={{ margin: 0, border: "none", padding: 0, }}> */}
                        <a className="card-link" data-toggle="collapse" href="#collapseAdventure"
                           style={{ marginLeft:"44%",width:"120px"}}>
                            < ToggleButton show='true' />
                        </a>
                        <div id="collapseAdventure" className="collapse show" data-parent="#accordionAdventure">
                            <div className="card-body">
                                <div className='row'>
                                    <div className="col-sm-3 bg-warning" >
                                        <AdventureCard title="us" />
                                    </div>
                                    <div className="col-sm-3 bg-warning" >
                                        <AdventureCard title="canada" />
                                    </div>
                                    <div className="col-sm-3 bg-warning" >
                                        <AdventureCard title="china" />
                                    </div>
                                    <div className="col-sm-3 bg-warning" >
                                        <AdventureCard title="france" />
                                    </div>
                                </div>
                                <div className='row' style={{ marginTop: "10px" }}>
                                    <div className="col-sm-3 bg-warning" >
                                        <AdventureCard title="switzerland" />
                                    </div>
                                    <div className="col-sm-3 bg-warning" >
                                        <AdventureCard title="germany" />
                                    </div>
                                    <div className="col-sm-3 bg-warning" >
                                        <AdventureCard title="austria" />
                                    </div>
                                    <div className="col-sm-3 bg-warning" >
                                        <AdventureCard title="italy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="arts" className="container-fluid bg-danger" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
              <h3>Arts</h3>

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
                    <div className="card bg-danger" style={{ margin: 0, border: "none", padding: 0, }} >
                        <a className="card-link" data-toggle="collapse" href="#collapseArts"
                           style={{ marginLeft:"44%",width:"120px"}}>
                            <ToggleButton show='true' />
                        </a>
                        <div id="collapseArts" className="collapse show" data-parent="#accordionArts">
                            <div className="card-body">
                                <ArtsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="movies" className="container-fluid bg-secondary" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h3>Movies</h3>
                <blockquote className="blockquote" style={{padding:"15px 50px"}} >
                <p>"  The whole of life is just like watching a film. Only it's as though you always get in ten minutes after the big picture has started, and no-one will
                    tell you the plot, so you have to work it out all yourself from the clues.  " </p>
                    <footer className="blockquote-footer" style={{color:"lightGray"}}>Terry Pratchett</footer>

                </blockquote>
                <div id="accordionMovies">
                    <div className="card bg-secondary" style={{ margin: 0, border: "none", padding: 0, }}>
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseMovies"
                           style={{ marginLeft:"44%",width:"120px"}}>
                            <ToggleButton />

                        </a>
                        <div id="collapseMovies" className="collapse" data-parent="#accordionMovies">
                            <div className="card-body">
                                <Movies />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="music" className="container-fluid bg-success" style={{ paddingTop: "70px", paddingBottom: "70px", marginBottom: "20px" }}>
                <h3>Music</h3>
                <blockquote className="blockquote" style={{padding:"15px 50px"}} >
                    <p>“  After silence, that which comes nearest to expressing the inexpressible is music. ” </p>
                    <footer className="blockquote-footer" style={{color:"lightGray"}}>Aldous Huxley</footer>
                </blockquote>
            <div id="accordionMusic">
                <div className="card bg-success" style={{margin: 0, border: "none", padding: 0,}}>
                    <a className="collapsed card-link" data-toggle="collapse" href="#collapseMusic"
                       style={{ marginLeft:"44%",width:"120px"}}>
                        <ToggleButton />

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
