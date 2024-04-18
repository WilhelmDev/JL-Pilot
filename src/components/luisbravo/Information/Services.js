import React from 'react'
import DetailsNeighborhood from './Details'

export default function Services(props) {
  return (
    <div className='amenities'>
      <h4>{props.title}</h4>
      <div className='amenities-container'>
        <div className='amenities-column'>
          <DetailsNeighborhood data="Agua corriente"/>
          <DetailsNeighborhood data="Cable prepago"/>
          <DetailsNeighborhood data="Cloaca"/>
          <DetailsNeighborhood data="Calle con mejorado"/>
        </div>
        <div className='amenities-column'>
          <DetailsNeighborhood data="Electricidad"/>
          <DetailsNeighborhood data="Electricidad subterranea"/>
          <DetailsNeighborhood data="Gas envasado"/>
          <DetailsNeighborhood data="Gas natural"/>
        </div>
        <div className='amenities-column'>
          <DetailsNeighborhood data="Internet"/>
          <DetailsNeighborhood data="Internet Satelital"/>
          <DetailsNeighborhood data="Fibra óptica"/>
          <DetailsNeighborhood data="Pavimento"/>
        </div>
        <div className='amenities-column'>
          <DetailsNeighborhood data="Perforación de Agua"/>
          <DetailsNeighborhood data="Pozo Ciego"/>
          <DetailsNeighborhood data="Teléfono"/>
          <DetailsNeighborhood data="Pavimento"/>
        </div>
      </div>
    </div>
  )
}