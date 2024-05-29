import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import Filtros from '../../components/Filtros';



function PropsVenta() {

    const props = useSelector(state => state.propiedades);
    const soloEnVenta = props.filter(p => p.operacion === 'venta');
    

    return (
        <div className='cont-prop-Venta'>         
            <div className='cont-titulo-props-venta'> 
                <h1>Propiedades en Venta</h1>
                {/* filtros */}
                <div className='cont-filtros-venta'>
                    <Filtros mostrarVentaAlq={false}/>
                </div>
                <ListaPropiedades allProps={soloEnVenta} />
            </div>            
        </div>
    )
}

export default PropsVenta