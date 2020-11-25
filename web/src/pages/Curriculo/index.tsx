import React, { useState } from 'react';
import './styles.css';
import HeaderMain from '../../components/HeaderMain';
import { Document, Page } from 'react-pdf';

function Curriculo() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (

        <div>
            <HeaderMain></HeaderMain>
            <div className="site-main-about">

                <section id="about" className="about-section pt-page">
                    <div className="section-container">
                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-graduation-hat"></i></span>
                            <h2>Curriculum Vitae</h2>
                        </div>

                        <div className="row about mb-70">
                            <p>Caso não seja possível ver o arquivo abaixo, <a href="./curriculo.pdf">clique aqui</a>.</p>
                            {/*<iframe src="./curriculo.pdf"
                                width="75%"
                                height="450em"
                            >
    </iframe>*/}
                            <p>
                                <Document
                                    file="curriculo.pdf"
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} />
                                </Document>
                            </p>
                        </div>
                    </div>
                </section>


            </div>
        </div >
    )
}

export default Curriculo;