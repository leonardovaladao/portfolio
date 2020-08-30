import React from 'react';
import Profile from '../../assets/images/profile-img.jpg';
import HeaderMobile from '../HeaderMobile';
import './styles.css'

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
                        <li><a href="index.html" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-home"></i></span>Home </a> </li>
                        <li><a href="about.html" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-user"></i></span>Sobre</a></li>

                        <li><a href="portfolio.html" className="pt-link"><span className="nav-menu-icon"><i
                            className="lnr lnr-briefcase"></i></span>Portfolio</a></li>

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