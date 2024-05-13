import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './styles.css';

import iconoProps from '../../Imagenes/logoCasaDepto.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {

    //estado para check venta
    const [ checkedVenta, setCheckedVenta ] = useState(false);
    //estado para check alq
    const [ checkedAlquiler, setCheckedAlquiler ] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (e) => {};
    //funcion actualiza check venta
    const actualizaCheckVenta = (e) => {};
    //funcion actualiza check alq
    const actualizaCheckAlq = (e) => {};


    return (
        <div className='contGralLanding'>            
            <div className='cont-land'>
                {/* texto superior */}
                <div className="container">
                    <div className="sub-container">
                        <p className="text">
                            <b>
                                Somos una empresa con presencia en el Mercado Inmobiliario de Mar del Plata desde 1972.
                                En estos años hemos asesorado a empresas de primer nivel Nacional e Internacional,
                                así como a pymes y particulares
                            </b>
                        </p>
                    </div>
                </div>
                
                {/* categotias */}
                <div className='cont-categorias'>
                    <div className='cont-categ-filtros'>
                        {/* tipos props */}
                        <div className='tipos-props'>
                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>Deptos</b></p>
                            </div>

                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>Casas</b></p>
                            </div>

                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>PH</b></p>
                            </div>

                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>Locales</b></p>
                            </div>

                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>Terrenos</b></p>
                            </div>

                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>Oficinas</b></p>
                            </div>
                            
                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>Desarrollos</b></p>
                            </div>

                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>Cocheras</b></p>
                            </div>

                            <div className='cont-div-categoria'>
                                <button className='btn-cat' id='depto' onClick={(e) => handleClick(e)}>
                                    <img src={iconoProps} alt='' className='icono-cat' />                                                                            
                                </button>
                                <p className='p-tipo-prop-filtro'><b>Todas</b></p>
                            </div>
                            
                        </div>
                        
                        {/* venta - alq */}
                        <div className='cont-opc-VA'>
                            <label className='label-venta'>En Venta</label>
                            <input className='input-venta' type='checkbox' id='venta' value={checkedVenta} onChange={(e) =>actualizaCheckVenta(e)}/>
                            <label className='label-alquiler'>En Alquiler</label>
                            <input className='input-alquiler' type='checkbox' id='venta' value={checkedAlquiler} onChange={(e) =>actualizaCheckAlq(e)}/>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default LandingPage;

