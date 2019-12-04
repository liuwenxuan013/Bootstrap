import React from 'react';
class ToggleButton extends React.Component
{
    state = { doesShow: this.props.show };
    clickHandler = () =>
    {

        this.setState({ doesShow: !this.state.doesShow })
    };

    render()
    {
        let text = this.state.doesShow ? "Hide" : "Show more";

        return (

            <button type="button"
                class="btn btn-secondary"
                onClick={this.clickHandler}>{text}</button>

        );
    }
}
export default ToggleButton;
