import React from 'react';
import { InfoContext } from '../Info/Info';

class AdventureCard extends React.Component
{
    state = {
        title: this.props.title
    }
    render()
    {
        const x = this.state.title;
        let album = [];
        <InfoContext.Consumer>
            {(context) =>
            {
                switch (x)
                {
                    case "us":
                        album = context.info.adventureImg.us;
                        break;
                    case "canada":
                        album = context.info.adventureImg.canada;
                        break;
                    default:
                        album = [];
                }

            }
            }

        </InfoContext.Consumer>
        return (
            <> <div id="demo" class="carousel slide" data-ride="carousel">
                <InfoContext.Consumer>
                    {(context) =>
                    {
                        return (<div>

                            <ul class="carousel-indicators">
                                <li data-target="#demo" class="active"></li>
                                {context.info.adventureImg.x.map(e =>
                                {

                                    return (

                                        <li key={e.title}
                                            data-target="#demo"
                                        // data-slide-to={e.index}

                                        >
                                        </li>
                                    )

                                })}
                            </ul>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={context.info.adventureImg.title[1].imgUrl} alt="Los Angeles" width="300"
                                        height="200" />
                                </div>
                                {context.info.adventureImg.map(e =>
                                {
                                    return <div class="carousel-item ">
                                        <img src={e.imgUrl}
                                            alt={e.title}
                                            width="300"
                                            height="200" />
                                    </div>
                                })
                                }

                            </div>
                        </div>
                        )
                    }}

                </InfoContext.Consumer>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div >


            </>

        );
    }
}
export default AdventureCard;