import React from 'react';

import Mile from './Mile/Mile';
import Temperature from './Temperature/Temperature';


class Tools extends React.Component
{
    state = { isClick: null }
    temperatureHandler = () =>
    {
        this.setState({ isClick: 'temperature' });
    };
    milesHandler = () =>
    {
        this.setState({ isClick: 'mile' });
    };
    render()
    {
        return <div >
            <h4 style={{textAlign:"center"}}>Unit Converter</h4>
            <div style={{textAlign:"center" ,marginBottom:"30px"}} >



                <a className="text-warning"
                    onClick={this.milesHandler}>
                    Miles|
                </a>
                <a className="text-warning"
                    onClick={this.temperatureHandler}
                >Temperature
                </a>
            </div>

                <div style={{textAlign: "center"}}>
                    {this.state.isClick === 'temperature' ? <Temperature/> : <Mile/>}
                </div>
        </div>

    }
}
export default Tools;
