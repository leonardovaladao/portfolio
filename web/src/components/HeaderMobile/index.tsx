import React from 'react';
import './styles.css'

function HeaderMobile() {
    window.onload = function () {
        var toggleMobileLink = Array.from(document.getElementsByClassName("header-toggle") as HTMLCollectionOf<HTMLElement>)[0];
        var headerMainLeft = Array.from(document.getElementsByClassName("header-main") as HTMLCollectionOf<HTMLElement>)[0];

        function moveMobileMenu() {

            if (headerMainLeft.style.left === "-230px") {
                headerMainLeft.style.left = "0px";
            } else {
                headerMainLeft.style.left = "-230px";
            }
        }
        toggleMobileLink.addEventListener("click", moveMobileMenu);
    }
    return (
        <div className="header-mobile">
            <a className="header-toggle"><i className="fas fa-bars"></i></a>
            <h2>Valadão</h2>
        </div>
    )
}

export default HeaderMobile