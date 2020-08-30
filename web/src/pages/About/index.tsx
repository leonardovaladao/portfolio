import React from 'react';
import './styles.css'
import HeaderMain from '../../components/HeaderMain';

function About() {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className="site-main">

                <section id="about" className="about-section pt-page">
                    <div className="section-container">
                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-user"></i></span>
                            <h2>Sobre Mim</h2>
                        </div>

                        <div className="row about mb-70">
                            <div className="col-lg-8">
                                <h3 className="mb-20">UI/UX Designer  Developer</h3>
                                <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
                                <p>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
                            </div>

                            <div className="col-lg-4">
                                <div className="about-info">
                                    <h3 className="mb-20">Informações</h3>
                                    <ul>
                                        <li><span className="title">Nome</span><span className="value">Leonardo Valadão</span></li>
                                        <li><span className="title">Idade</span><span className="value">22 Anos</span></li>
                                        <li><span className="title">Cidade</span><span className="value">São Paulo, SP</span></li>
                                        <li><span className="title">E-mail</span><span className="value">example@example.com</span></li>
                                        <li><span className="title">Telefone</span><span className="value">(11) 99999 9999</span></li>
                                    </ul>
                                    <div className="resume-button mt-30">
                                        <a className="btn-main" href="#">Download Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div >
    )
}

export default About;