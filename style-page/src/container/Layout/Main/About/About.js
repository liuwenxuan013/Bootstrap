import React from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../../../../components/Info/Info';

function About()
{
    return (<div   >


        <InfoContext.Consumer>{
            (context) =>
            {
                return <div className="d-flex bg-light"  >
                    <div
                        style={{
                            width:"32%",

                           margin:"24px"
                        }}>
                        <div className="card" >
                            <img className="card-img-top" src="./images/idphoto.jpg" alt=" ID Card" style={{ width: "100%" }} />
                            <div className="card-body">
                                <h4 className="card-title">{context.info.name}</h4>
                                <p className="card-text"> {context.info.title}</p>
                                <Link to="/profile" className="card-text">See Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{
                            margin:"24px",
                            width:"60%"

                          }}>
                        <h4>About me...</h4>
                        <p>{context.info.sub}</p>
                        <p>{context.info.sub2}</p>
                        <div className="card" style={{ width: "250px ", height:"340px",float: "left" }}>
                            <img className="card-img-top" src="./images/ys.jpg" alt="Yellow Stone View" style={{ width: "100%" }} />

                            <div className="card-body" style={{ float: "left" }} >
                                <h4 className="card-title">Adventure</h4>
                                <p className="card-text">More than a Developer</p>
                                <Link to={{
                                    pathname: '/features',
                                    hash: '#section2',
                                }} className="card-link">Know more</Link>
                                {/*<a href="/features#section3" className="card-link">Know more</a>*/}
                            </div>
                        </div>
                        <div className="card" style={{ width: "250px ", height:"340px",float: "right" ,
                            // float: "left",
                            marginLeft: "30px" }}>
                            <img className="card-img-top" src="./images/nature2.jpg" alt="Nature Painting" style={{ width: "100%" }} />
                            <div className="card-body" >
                                <h4 className="card-title">Arts</h4>
                                <p className="card-text">More than a Developer</p>
                                <Link to="/features#section3" className="card-link">Know more</Link>
                                {/*<Route path="/features#section3" component={Features} />*/}
                                {/*<a href="#" className="card-link">Another link</a>*/}
                            </div>
                        </div>
                    </div>
                </div>

            }
        }
        </InfoContext.Consumer>

    </div>

    );
}
export default About;
