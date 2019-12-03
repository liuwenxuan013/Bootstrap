
import React, { useState, useEffect } from 'react';
function Favorite()
{
    const [count, setCount] = useState(99);

    useEffect(() =>
    {
        document.getElementsByClassName('fas fa-heart').count = '${count}';
    }
    );



    return (

        <i
            class="fas fa-heart "
            style={{ color: "#d9d9d9" }}
            onClick={() =>
            {
                setCount(count + 1);

            }}

        > {count}</i>

    );

}
export default Favorite;
