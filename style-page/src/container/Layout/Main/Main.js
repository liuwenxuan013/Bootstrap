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
        <div className="main">
            <div class="jumbotron" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 0, }}>
                <h1>Nice to meet you...</h1>
                <p>Hi I'm Laura</p>
            </div>
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