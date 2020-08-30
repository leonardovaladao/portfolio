import React from 'react';
import './styles.css';
import HeaderMain from '../../components/HeaderMain';

function Landing() {
    return (
        <div>

            <HeaderMain></HeaderMain>


            <div className="site-main">

                <section id="home" className="banner-section pt-page">

                    <div id="particles-js"></div>

                    <div className="banner-content">

                        <h1 className="mb-20">Leonardo <span>Valadão</span></h1>

                        <p className="cd-headline clip is-full-width">
                            <span>I am a </span>
                            <span className="cd-words-wrapper">
                                <b>Web Developer</b>
                            </span>
                        </p>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Landing;