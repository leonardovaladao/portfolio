import React from 'react';
import './styles.css';
import HeaderMain from '../../components/HeaderMain';

function About() {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className="site-main-about">

                <section id="about" className="about-section pt-page">
                    <div className="section-container">
                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-user"></i></span>
                            <h2>Sobre Mim</h2>
                        </div>

                        <div className="row about mb-70">
                            <div className="col-lg-8">
                                <h3 className="mb-20">Estudante de Física em São Paulo, Brasil.</h3>

                                <p>Nascido em São Paulo em 1998, Leonardo estudou toda a vida na rede pública, fazendo colegial na rede ETEC, e entrou na Universidade de São Paulo em 2017, no curso de Licenciatura em Física do Instituto de Física da USP.</p>
                                <p>Trabalhou por dois anos em uma Iniciação Científica com o e-Disciplinas, o Moodle da USP, onde desenvolveu um website através de Wordpress por um ano, e trabalhou com análise de dados com Python por um ano.</p>
                                <p>Atualmente, possui uma Iniciação Científica onde desenvolve uma pesquisa sobre a história e a epistemologia do Eletromagnetismo.</p>
                            </div>

                            <div className="col-lg-4">
                                <div className="about-info">
                                    <h3 className="mb-20">Informações</h3>
                                    <ul>
                                        <li><span className="title">Nome</span><span className="value">Leonardo Valadão</span></li>
                                        <li><span className="title">Idade</span><span className="value">22 Anos</span></li>
                                        <li><span className="title">Cidade</span><span className="value">São Paulo, SP</span></li>
                                        <li><span className="title">E-mail</span><span className="value">leonardo.m.valadao@hotmail.com</span></li>
                                    </ul>
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