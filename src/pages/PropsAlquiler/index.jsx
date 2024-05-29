import React from 'react';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import Filtros from '../../components/Filtros';


function PropsAlquiler() {

    const props = useSelector(state => state.propiedades);
    const soloEnAlq = props.filter(p => p.operacion === 'alquiler');
    

    return (
        <div className='cont-prop-Venta'>         
            <div className='cont-titulo-props-venta'> 
                <h1>Propiedades en Alquiler</h1>
                {/* filtros */}
                <div className='cont-filtros-venta'>
                    <Filtros mostrarVentaAlq={false}/>
                </div>
                <ListaPropiedades allProps={soloEnAlq} />
            </div>            
        </div>
    )
}

export default PropsAlquiler