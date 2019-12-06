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


                return <div className="card-columns" >
                    {context.info.arts.map(e =>
                    {
                        return (
                            <div key={e.title} className="card" style={{ width: "100%" }}>
                                <img className="card-img-top" src={e.imgUrl} alt={e.desc} style={{ width: "100%" }} />
                                <div className="card-body">
                                    <h4 className="card-title">{e.title}</h4>
                                    <p className="card-text">{e.desc}| @Laura |{e.time}</p>

                                </div>

<Favorite/>
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
