import React from 'react';
import ArrowDown from '../Flecha-animada';
import './styles.css';

function LandingPage() {


    return (
        <div className='contGralLanding'>            
            <div className='cont-land'>
                {/* texto superior */}
                <div className="container-texto">
                    <div className="sub-container-texto">
                        <p className="texto">
                            <b>
                                Somos una empresa con presencia en el Mercado Inmobiliario de Mar del Plata desde 1972.
                                En estos años hemos asesorado a empresas de primer nivel Nacional e Internacional,
                                así como a pymes y particulares
                            </b>
                        </p>
                    </div>
                </div>

                {/* flecha animada */}
                <div className='cont-flecha'>
                    <ArrowDown/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;

