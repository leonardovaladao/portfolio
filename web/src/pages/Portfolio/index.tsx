import React from 'react';
import './styles.css';
import HeaderMain from '../../components/HeaderMain';
import Portitem from '../../components/Portitem';

function Portfolio() {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className="site-main-portfolio">

                <section id="about" className="about-section pt-page">
                    <div className="section-container">
                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-briefcase"></i></span>
                            <h2>Projetos</h2>
                        </div>

                        <div className="row about mb-70">
                            <ul className='link'>
                                <li><a href='#'>&#8594; Clique aqui para checar meus projetos no Github</a></li>
                                <li><a href='#'>&#8594; Clique aqui para checar trabalhos de disciplinas</a></li>
                            </ul>
                            <div className="col-lg-8">                                
                                <h1 className="proj-title">Projetos atuais</h1>

                                <Portitem
                                    title="A Física de Dark"
                                    text="Neste projeto, desenvolvo em conjunto com um grupo de pesquisa da Universidade de São Paulo um material didático sobre a Física de Dark."
                                />
                                <Portitem
                                    title="Pesquisa sobre a epistemologia e história do eletromagnetismo"
                                    text="Em minha Iniciação Científica na Universidade de São Paulo, desenvolvo uma pesquisa sobre os conceitos epistemológicos por trás do Encontro de Bath, importante marco da história do eletromagnetismo, a parte da física que lida com efeitos elétricos e magnéticos."
                                />
                                <hr></hr>

                                <h1 className="proj-title">Projetos passados</h1>
                                <Portitem
                                    title="Análise de dados do Moodle da USP"
                                    date="ago/2019-ago/2020"
                                    text="Em minha Iniciação Científica na Universidade de São Paulo, desenvolvo uma pesquisa sobre os conceitos epistemológicos por trás do Encontro de Bath, importante marco da história do eletromagnetismo, a parte da física que lida com efeitos elétricos e magnéticos."
                                />
                                <Portitem
                                    title="Desenvolvimento de Documentação para o Moodle da USP"
                                    date="ago/2018-ago/2019"
                                    text="Em minha Iniciação Científica na Universidade de São Paulo, desenvolvo uma pesquisa sobre os conceitos epistemológicos por trás do Encontro de Bath, importante marco da história do eletromagnetismo, a parte da física que lida com efeitos elétricos e magnéticos."
                                />
                                <hr></hr>
                            </div>


                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Portfolio;