import React from 'react'
import './styles.css';

import iconoProps from '../../Imagenes/logoCasaDepto.jpg';

function LandingPage() {



    return (
        <div className='contGralLanding'>            
            <div className='cont-land'>
                <div className='cont-texto'>
                    <p>Somos una empresa con presencia en el Mercado Inmobiliario de Mar del Plata desde 1972. En estos años hemos asesorado a empresas de primer nivel Nacional e Internacional, así como a pymes y particulares.</p>
                </div>
                <div className='cont-categorias'>
                    <div className='cont-div-categoria'>
                        <div className='cont-info-cat'>
                            <img src={iconoProps} alt='' className='icono-cat' />
                            <p>Nuestras Propiedades en</p>
                            <p>Venta</p>
                        </div>
                    </div>
                    <div className='cont-div-categoria'>
                        <div className='cont-info-cat'>
                            <img src={iconoProps} alt='' className='icono-cat' />
                            <p>Nuestras Propiedades en</p>
                            <p>Alquiler</p>
                        </div>
                    </div>
                    <div className='cont-div-categoria'>
                        <div className='cont-info-cat'>
                            <img src={iconoProps} alt='' className='icono-cat' />
                            <p>Nuestras Propiedades en</p>
                            <p>Alquiler</p>
                        </div>
                    </div>
                    <div className='cont-div-categoria'>
                        <div className='cont-info-cat'>
                            <img src={iconoProps} alt='' className='icono-cat' />
                            <p>Nuestras Propiedades en</p>
                            <p>Alquiler</p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default LandingPage;

