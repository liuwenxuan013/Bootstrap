import React from 'react';

import Mile from './Mile/Mile';
import Temperature from './Temperature/Temperature';


class Tools extends React.Component
{
    state = { isClick: null }
    temperatureHandler = () =>
    {
        this.setState({ isClick: 'temperature' });
    }
    milesHandler = () =>
    {
        this.setState({ isClick: 'mile' });
    }
    render()
    {
        return <div class="row " >
            <div class="btn-group-vertical col-sm-3" style={{ height: "100px" }}>
                <button type="button"
                    class="btn btn-secondary"
                    onClick={this.milesHandler}>
                    Miles</button>
                <button type="button"
                    class="btn btn-secondary"
                    onClick={this.temperatureHandler}
                >Temperature</button>

            </div>

            <div class="col-sm-8" style={{ paddingLeft: "20%" }}>
                {this.state.isClick === 'temperature' ? <Temperature /> : <Mile />}
            </div>

        </div>
    }
}
export default Tools;