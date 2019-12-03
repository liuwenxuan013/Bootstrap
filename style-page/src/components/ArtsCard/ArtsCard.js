import React from 'react';
import { InfoContext } from '../Info/Info';
import Favorite from '../../components/Favorite/Favorite';
class ArtsCard extends React.Component
{

    render()
    {


        return <InfoContext.Consumer>{
            (context) =>
            {


                return <div class="card-columns" >
                    {context.info.arts.map(e =>
                    {
                        return (
                            <div class="card" style={{ width: "250px" }}>
                                <img class="card-img-top" src={e.imgUrl} alt={e.desc} style={{ width: "100%" }} />
                                <div class="card-body">
                                    <h4 class="card-title">{e.title}</h4>
                                    <p class="card-text">{e.desc}| @Laura |{e.time}</p>
                                    <Favorite />
                                </div>



                            </div>)

                    })


                    }
                </div>



            }
        }
        </InfoContext.Consumer >

    }

}
export default ArtsCard;