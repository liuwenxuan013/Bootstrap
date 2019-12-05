import React from 'react';


function Home()
{
    return (
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
                <li data-target="#demo" data-slide-to="5"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img src="https://www.wallpaperup.com/uploads/wallpapers/2014/03/18/301966/50c2239a88b5336315269c0ac72a8e46-700.jpg" alt="superman" width="1100" height="500" />
                    <div class="carousel-caption">
                        <h3>I am a Web Developer</h3>
                        <p>...but not just a Web Developer</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.hipwallpaper.com/i/40/69/3gyN0d.jpg"
                         alt="programming" width="1100" height="500"/>
                    <div className="carousel-caption">
                        <h3>Programming</h3>
                        <p>What I'm passionate about...</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://wallpaperaccess.com/full/181658.jpg"
                         alt="Art" width="1100" height="500"/>
                    <div className="carousel-caption">
                        <h3>Arts</h3>
                        <p>Imagination is more important than knowledge</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://wallpapercave.com/wp/Fr0KPFO.jpg"
                         alt="Nature" width="1100" height="500" />
                    <div className="carousel-caption">
                        <h3>Adventure</h3>
                        <p> Life is short and the world is wide</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://closler.org/wp-content/uploads/2019/02/film-reel.png"
                         alt="Movie" width="1100" height="500"/>
                    <div className="carousel-caption">
                        <h3>Movies</h3>
                        <p> How Shakespeare would have loved cinema</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://live.staticflickr.com/45/127115669_9f3e835db5_b.jpg" alt="Music" width="1100" height="500"/>
                    <div className="carousel-caption">
                        <h3>Music</h3>
                        <p> Where words fail, music speaks</p>
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>











    );
}
export default Home;
