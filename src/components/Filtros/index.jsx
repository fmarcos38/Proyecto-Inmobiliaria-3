import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtraOperacionTipo, getProps, muestraDestacadas } from '../../Redux/Actions';
import './estilos.css';
import iconoProps from '../../Imagenes/logoCasaDepto.jpg';


function Filtros({mostrarVentaAlq}) {
    //estado para check venta/alq
    const [operacion, setOperacion] = useState('all');;
    const dispatch = useDispatch();

    const handleOperacionChange = (event) => {
        const { value } = event.target;
        setOperacion(value === operacion ? 'all' : value);
    };
    const handleClick = (e) => {
        switch (e.target.id) {
            case 'depto': console.log("click");
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'depto' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'depto' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'depto' }));
                }
                break;
            case 'casa':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'casa' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'casa' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'casa' }));
                }
                break;
            case 'ph':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'ph' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'ph' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'ph' }));
                }
                break;
            case 'local':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'local' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'local' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'local' }));
                }
                break;
            case 'terreno':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'terreno' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'terreno' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'terreno' }));
                }
                break;
            case 'oficina':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'oficina' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'oficina' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'oficina' }));
                }
                break;
            case 'cochera':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'cochera' }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'cochera' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'cochera' }));
                }
                break;
            case 'desarrollo':
                if (operacion === 'venta') {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'venta', destacada: true }));
                } else if (operacion === 'alquiler') {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'alquiler', destacada: true }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'desarrollo' }));
                }
                break;
            case 'todas':
                dispatch(getProps());
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        
            if(operacion === 'all'){ dispatch(getProps()); }
            if(operacion === 'venta'){ 
                dispatch(getProps());
                dispatch(filtraOperacionTipo({ operacion: 'venta' })); 
            }
            if(operacion === 'alquiler'){ 
                dispatch(getProps());
                dispatch(filtraOperacionTipo({ operacion: 'alquiler' })); 
            }
        
        //dispatchAction();
    }, [dispatch, operacion]);


    return (
        <div className='cont-principal-filtros'>            
            <div className='cont-filtros'>                        
                {/* venta - alq */}
                {
                    mostrarVentaAlq &&
                    <div className='cont-opc-VA'>
                        <label className='label-venta'>En Venta</label>
                        <input
                            className='input-venta'
                            type='checkbox'
                            value={'venta'}
                            checked={operacion === 'venta'}
                            onChange={(e) => handleOperacionChange(e)}
                        />
                        <label className='label-alquiler'>En Alquiler</label>
                        <input
                            className='input-alquiler'
                            type='checkbox'
                            checked={operacion === 'alquiler'}
                            value={'alquiler'}
                            onChange={(e) => handleOperacionChange(e)} />
                    </div>
                }
                {/* tipos props */}
                <div className='tipos-props'>
                            <div className='cont-div-categoria cat-1'>                                
                                <img src={iconoProps} alt='' className='icono-cat'  id='depto' onClick={(e) => handleClick(e)}/>                                
                                <p className='p-tipo-prop-filtro'><b>Deptos</b></p>
                            </div>

                            <div className='cont-div-categoria cat-2'>                                
                                <img src={iconoProps} alt='' className='icono-cat' id='casa' onClick={(e) => handleClick(e)}/>                                                                            
                                <p className='p-tipo-prop-filtro'><b>Casas</b></p>
                            </div>

                            <div className='cont-div-categoria cat-3' >
                                <img src={iconoProps} alt='' className='icono-cat' id='ph' onClick={(e) => handleClick(e)}/>                                                                            
                                <p className='p-tipo-prop-filtro'><b>PH</b></p>
                            </div>

                            <div className='cont-div-categoria cat-4' >
                                <img src={iconoProps} alt='' className='icono-cat' id='locales' onClick={(e) => handleClick(e)}/>                                                                            
                                <p className='p-tipo-prop-filtro'><b>Locales</b></p>
                            </div>

                            <div className='cont-div-categoria cat-5' >
                                <img src={iconoProps} alt='' className='icono-cat' id='terrenos' onClick={(e) => handleClick(e)}/>                                                                            
                                <p className='p-tipo-prop-filtro'><b>Terrenos</b></p>
                            </div>

                            <div className='cont-div-categoria cat-6' >
                                <img src={iconoProps} alt='' className='icono-cat' id='oficina' onClick={(e) => handleClick(e)}/>                                                                            
                                <p className='p-tipo-prop-filtro'><b>Oficinas</b></p>
                            </div>
                            
                            <div className='cont-div-categoria cat-7'>
                                <img src={iconoProps} alt='' className='icono-cat' id='desarrollo' onClick={(e) => handleClick(e)}/>                                                                            
                                <p className='p-tipo-prop-filtro'><b>Desarrollos</b></p>
                            </div>

                            <div className='cont-div-categoria cat-8'>
                                <img src={iconoProps} alt='' className='icono-cat' id='cochera' onClick={(e) => handleClick(e)}/>                                                                            
                                <p className='p-tipo-prop-filtro'><b>Cocheras</b></p>
                            </div>

                            <div className='cont-div-categoria cat-9'>
                                <img src={iconoProps} alt='' className='icono-cat' id='todas' onClick={(e) => handleClick(e)}/>                                                                            
                                <p className='p-tipo-prop-filtro'><b>Todas</b></p>
                            </div>
                            
                </div>
            </div>                
        </div>
    )
}

export default Filtros;