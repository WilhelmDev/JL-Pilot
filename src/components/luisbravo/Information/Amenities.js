import React from 'react'
import DetailsNeighborhood from './Details'

export default function Amenities(props) {
  return (
    <div className='amenities'>
      <h4>{props.title}</h4>
      <div className='amenities-container'>
        <div className='amenities-column'>
          <DetailsNeighborhood data="Cancha de fútbol"/>
          <DetailsNeighborhood data="Cancha de Hockey sintética"/>
          <DetailsNeighborhood data="Cacha de Basket"/>
          <DetailsNeighborhood data="Cancha de Voley"/>
          <DetailsNeighborhood data="Golf"/>
        </div>
        <div className='amenities-column'>
          <DetailsNeighborhood data="Golfhouse"/>
          <DetailsNeighborhood data="Casa de té"/>
          <DetailsNeighborhood data="Cancha de pádel"/>
          <DetailsNeighborhood data="Plaza de juegos"/>
          <DetailsNeighborhood data="SUM"/>
        </div>
        <div className='amenities-column'>
          <DetailsNeighborhood data="Club House"/>
          <DetailsNeighborhood data="Microcine"/>
          <DetailsNeighborhood data="Kiosko"/>
          <DetailsNeighborhood data="Cancha de Polo"/>
          <DetailsNeighborhood data="Sector hípico"/>
        </div>
        <div className='amenities-column'>
          <DetailsNeighborhood data="Equitación"/>
          <DetailsNeighborhood data="salto"/>
          <DetailsNeighborhood data="Gimnasio"/>
          <DetailsNeighborhood data="Control de acceso"/>
          <DetailsNeighborhood data="Alambre eléctrico perimetral"/>
        </div>
      </div>
    </div>
  )
}