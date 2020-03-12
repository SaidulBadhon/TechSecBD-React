import React, { Fragment } from 'react';
import BackgroundImage from "./img/background.png"
import BackgroundVideo from "./img/background.mp4"
import "./Home.css"
import MainContent from "./Content/MainContent.js"

function Home() {
    return (

        <Fragment>
            <section>
                <main>
                    <article>
                        <figure className="BackgroundImageClass">
                            <video id="videoBG" poster={BackgroundImage} autoPlay muted loop >
                                <source src={BackgroundVideo} type="video/mp4"/>
                            </video>
                            <figcaption>
                                <h1 style={{fontSize: "2cm", fontWeight: "900"}}>TechSecBD</h1>
                                <h1>Science, Tech and Other Electronics Review….</h1>
                            </figcaption>
                        </figure>
                        <div className="MainContent">
                            <h2 style={{fontSize: "1.25cm", textAlign: "center", color: "#3C4858"}}><b>Trending News</b></h2>
                            <h3 style={{textAlign: "center", color: "#3C4858", fontWeight: "400"}}><b>Get Latest trending news here...</b></h3>

                            <hr className="LineBraker"/>

                            <MainContent />
                        </div>


                    </article>
                </main>
            </section>
        </Fragment>    )
}

export default Home;
