import React from 'react'
import DetailsNeighborhood from './Information/Details'
import DetailsSection from './Information/Amenities'
import Amenities from './Information/Amenities'
import Services from './Information/Services'

export default function Information(props) {
  return (
        <section className='desc-details'>
          <div className='desc-container'>
            <h4 className='title'>Descripción del Barrio</h4>
            <p>{props.descNeighborhood}</p>
          </div>
          <div className='details'> 
            <h4 className='title'>Detalles</h4>
            <div className='details-container'>
              <div className='details-column'>
                <DetailsNeighborhood details="Código de referencia" data="RT4B"/>
                <DetailsNeighborhood details="Expensas" data="$252.000"/>
                <DetailsNeighborhood details="Actualización expensas" data="12-12-2024"/>
                <DetailsNeighborhood details="Lotes Disponibles" data="90"/>
              </div>
              <div className='details-column'>
                <DetailsNeighborhood details="Lotes Construidos" data="30"/>
                <DetailsNeighborhood details="Lotes Totales" data="120"/>
                <DetailsNeighborhood details="Financiación" data="si"/>
                <DetailsNeighborhood details="Eco-Construcción" data="si"/>
              </div>
              <div className='details-column'>
                <DetailsNeighborhood details="Posesión Inmediata" data="si"/>
                <DetailsNeighborhood details="Zonificacion" data="Residencial & Comercial"/>
                <DetailsNeighborhood details="Tamaño de los lotes" data=" Min: 100mts2"/>
                <DetailsNeighborhood details="" data="Max: 8000mts2"/>
              </div>
            </div>

          </div>
          <Amenities title="Amenidades"/>
          <Services title="Servicios"/>
          
        </section>
  )
}