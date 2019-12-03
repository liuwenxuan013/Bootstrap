import React from "react";

function ResultText(props)
{
    if (props.km >= 0 && props.km < 120)
        return <p style={{ color: 'white' }}>Good Driving! </p>
    if (props.km >= 120)
        return <p style={{ color: '#ff8080' }}>Over Speed! </p>
    return <p></p>
}

export default ResultText;
