import React from 'react';
import { InfoContext, myInfo } from '../Info/Info';

class AdventureCard extends React.Component
{
    state = {
        title: this.props.title,
    }
    render()
    {
        let title = this.state.title;
        let album = [];
        return <InfoContext.Consumer>{
            (context) =>
            {
                // if (x === "us") album = [...context.info.adventureImg.us];
                // if (x === "canada") album = [...context.info.adventureImg.canada];
                switch (title)
                {
                    case "us":
                        album = [...context.info.adventureImg.us];
                        break;
                    case "canada":
                        album = [...context.info.adventureImg.canada];
                        break;
                    case "china":
                        album = [...context.info.adventureImg.china];
                        break;
                    case "france":
                        album = context.info.adventureImg.france;
                        break;
                    case "switzerland":
                        album = context.info.adventureImg.switzerland;
                        break;
                    case "germany":
                        album = context.info.adventureImg.germany;
                        break;
                    case "austria":
                        album = context.info.adventureImg.austria;
                        break;
                    case "italy":
                        album = context.info.adventureImg.italy;
                        break;
                    default:
                        album = [...context.info.adventureImg.us];
                }


                return <div>

                    <div id={title} class="carousel slide" data-ride="carousel">
                        <ul class="carousel-indicators">
                            {album.forEach((e, index) =>
                            {
                                console.log(index);
                                return <li data-target={title}
                                    data-slide-to={index}
                                    class="active"></li>

                            })}
                        </ul>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={album[6].imgUrl}
                                    alt={album[6].title}
                                    width="250"
                                    height="200" />
                                <div class="carousel-caption">
                                    <h3>{album[6].title}</h3>
                                    <p>{album[6].desc}|{album.time}</p>
                                </div>
                            </div>
                            {album.map((e, index) =>
                            {

                                return <div key={e.imgUrl} class="carousel-item">
                                    <img src={e.imgUrl}
                                        alt={e.title}
                                        width="250"
                                        height="200" />
                                    <div class="carousel-caption" >
                                        <h3>{e.title}</h3>
                                        <p>{e.desc}|{e.time}</p>
                                    </div>
                                </div>

                            })}
                        </div>
                    </div>
                    <a class="carousel-control-prev" href={'#' + title} data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href={'#' + title} data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>

            }
        }


        </InfoContext.Consumer >

    }

}
export default AdventureCard;