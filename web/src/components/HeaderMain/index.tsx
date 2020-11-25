import React from 'react';
import Profile from '../../assets/images/profile-img.jpg';
import HeaderMobile from '../HeaderMobile';
import './styles.css';
import { Link } from 'react-router-dom';

function HeaderMain() {
    return (
        <div>
            <HeaderMobile></HeaderMobile>
            <div className="header-main" data-simplebar>
                <div className="image-container">
                    <h2 className="header-name">Valadão</h2>
                    <img src={Profile} alt="profile-pic" />
                </div>


                <nav className="nav-menu">
                    <ul>
                        <li><Link to="/" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-home"></i></span>Home </Link> </li>

                        <li><Link to="/about" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-user"></i></span>Sobre</Link></li>

                        <li><Link to="/portfolio" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-briefcase"></i></span>Projetos</Link></li>

                        {/*<li><Link to="/curriculum" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-graduation-hat"></i></span>Currículo</Link></li>*/}

                        <li><a href="https://github.com/leonardovaladao" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-laptop-phone"></i></span>Github</a></li>

                        <li><a href="https://www.linkedin.com/in/leonardo-valad%C3%A3o" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-license"></i></span>Linkedin</a></li>

                        {/*<li><Link to="/blog" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-book"></i></span>Blog</Link></li>*/}

                        <li><Link to="/contact" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-envelope"></i></span>Contato</Link></li>

                    </ul>
                </nav>



                <div className="nav-footer">

                    <ul className="social">
                        <li><a href="#" className="active"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-dribbble-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-behance-square"></i></a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default HeaderMain