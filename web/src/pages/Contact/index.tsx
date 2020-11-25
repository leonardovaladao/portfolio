import React from 'react';
import './styles.css';
import HeaderMain from '../../components/HeaderMain';

function Contact() {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className="site-main-about">

                <section id="about" className="about-section pt-page">
                    <div className="section-container">
                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-envelope"></i></span>
                            <h2>Contato</h2>
                        </div>

                        <div className="row about mb-70">
                            <div className="col-lg-8">

                                <p>Para entrar em contato comigo, mande um e-mail para leonardo.m.valadao@hotmail.com <a href = "mailto: leonardo.m.valadao@hotmail.com">(ou clique aqui)</a>.</p>
                                
                            </div>

                            
                        </div>
                    </div>
                </section>


            </div>
        </div >
    )
}

export default Contact;