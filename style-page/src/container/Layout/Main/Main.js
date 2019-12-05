import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Features from './Features/Features';
import Profile from './Profile/Profile';
import Contact from './Contact/Contact';
import { InfoContext, myInfo } from '../../../components/Info/Info';

function Main()
{
    return (
        <div className="main" style={{marginTop:"58px"}}>
            {/*<div class="jumbotron" style={{ margin: 0, padding: 0, border: 0, }}>*/}

            {/*    <h4>Nice to meet you...</h4>*/}
            {/*    <p>I'm Laura</p>*/}

            {/*</div>*/}
            <InfoContext.Provider value={{ info: myInfo }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/features" component={Features} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </InfoContext.Provider >
        </div >

    );
}
export default Main;
