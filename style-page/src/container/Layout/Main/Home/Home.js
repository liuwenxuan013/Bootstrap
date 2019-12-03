import React from 'react';


function Home()
{
    return (
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.wallpaperup.com/uploads/wallpapers/2014/03/18/301966/50c2239a88b5336315269c0ac72a8e46-700.jpg" alt="superman" width="1100" height="500" />
                    <div class="carousel-caption">
                        <h3>I am Superman</h3>
                        <p>more than a Web Developer!</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://wallpaperaccess.com/full/1129041.jpg" alt="potraite" width="1100" height="500" />
                    <div class="carousel-caption">
                        <h3>Arts...</h3>
                        <p>Imagination is more important than knowledge</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://4kwallpaper.org/wp-content/uploads/Programming-Wallpapers-5-1500x500.jpg" alt="programming" width="1100" height="500" />
                    <div class="carousel-caption">
                        <h3>Programming</h3>
                        <p>What I'm passionate about...!</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>











    );
}
export default Home;