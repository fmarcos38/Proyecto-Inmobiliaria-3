import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import ListaPropiedades from '../../components/ListaPropiedades';
import LandingPage from '../../components/LandingPage';
import Loading from '../../components/Loading';
import CotizacionDolar from '../../components/CotizacionDolar';
import { getProps } from '../../Redux/Actions';
import WhatsAppButton from '../../components/BotonWhastApp';
import Filtros from '../../components/Filtros';
import FiltrosPantallaChica from '../../components/Filtros-Pantalla-Chica';

function Home() {

    const loadding = useSelector(state => state.loading);
    const allProps = useSelector(state => state.propiedades);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProps());
    }, [dispatch]);

    return (
        <div className='contHome'>
            {
                loadding ?
                (
                    <Loading/>
                    ) : (
                        <div className='cont-home'>
                            {/* landing */}
                            <LandingPage />
                            {/* Filtros P.Grande */}
                            <div className='cont-filtros-home'>
                                <Filtros mostrarVentaAlq={true}/>
                            </div>
                            {/* filtros P.Chica */}
                            <div className='cont-filtrosPCH'>
                                <FiltrosPantallaChica/>
                            </div>
                            {/* lista props */}
                            <div className='cont-listaP-home'>
                                <ListaPropiedades allProps={allProps} />
                            </div>
                            
                            {/* cotizaciones */}
                            <CotizacionDolar />
                            {/* boton whatsApp */}
                            <WhatsAppButton/>
                        </div>
                    )
            }
        </div>
    )
}

export default Home