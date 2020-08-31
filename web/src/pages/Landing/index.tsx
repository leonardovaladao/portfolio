import React from 'react';
import './styles.css';
import HeaderMain from '../../components/HeaderMain';
import Particles from 'react-particles-js';

function Landing() {
    return (
        <div>



            <HeaderMain></HeaderMain>


            <div className="site-main-landing">

                <section id="home" className="banner-section pt-page">



                    <div className="banner-content">

                        <h1 className="mb-20">Leonardo <span>Valadão</span></h1>

                        <p className="cd-headline clip is-full-width">
                            <span>Estudante de </span>
                            <span className="cd-words-wrapper">
                                <b>Física</b>
                            </span>
                            <span> no IF-USP.</span>
                        </p>
                    </div>
                    <Particles
                        height='2000px'
                        params={{
                            particles: {
                                number: {
                                    value: 100,
                                    density: { enable: true, value_area: 500 },
                                },
                                size: {
                                    value: 3,
                                },
                                line_linked: {
                                    distance: 120,
                                },
                                move: {
                                    speed: 1.5,
                                    straight: false,
                                    random: true,
                                    bounce: true,
                                    attract: {
                                        enable: true,
                                        rotateX: 3000,
                                        rotateY: 1500,
                                    }
                                },
                                opacity: {
                                    value: 0.75,
                                },

                            },
                        }}
                    />
                </section>

            </div>

        </div>
    )
}

export default Landing;