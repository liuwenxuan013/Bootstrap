import React from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../../../../components/Info/Info';
function About()
{
    return (<div>


        <InfoContext.Consumer>{
            (context) =>
            {
                return <div>
                    <div class="col-sm-4"
                        style={{
                            float: "left ",
                            marginLeft: 0,
                            paddingLeft: 0,
                        }}>
                        <div class="card">
                            <img class="card-img-top" src="./images/idphoto.jpg" alt=" ID Card" style={{ width: "100%" }} />
                            <div class="card-body">
                                <h4 class="card-title">{context.info.name}</h4>
                                <p class="card-text"> {context.info.title}</p>
                                <Link to="/profile" class="btn btn-primary">See Profile</Link>
                            </div>
                        </div>
                    </div>
                    <div class='col-sm-8' style={{ float: "left " }}>
                        <h4>About me...</h4>
                        <p>{context.info.summary}</p>
                        <div class="card" style={{ width: " 45%", float: "left" }}>
                            <img class="card-img-top" src="./images/ys.jpg" alt=" ID Card" style={{ width: "100%" }} />

                            <div class="card-body" style={{ float: "left" }}>
                                <h4 class="card-title">Adventure</h4>
                                <p class="card-text">More than a Developer</p>
                                <Link to={{
                                    pathname: '/features',
                                    hash: '#section41',
                                    search: '?quick-arts=true'
                                }} class="card-link">Know more</Link>
                                <a href="/features#section3" class="card-link">Know more</a>
                            </div>
                        </div>
                        <div class="card" style={{ width: " 45%", float: "left", marginLeft: "30px" }}>
                            <img class="card-img-top" src="./images/nature2.jpg" alt=" ID Card" style={{ width: "100%" }} />
                            <div class="card-body" style={{ float: "left" }}>
                                <h4 class="card-title">Arts</h4>
                                <p class="card-text">More than a Developer</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
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
