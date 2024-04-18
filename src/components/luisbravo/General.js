import React from 'react'
import ButtonLocation from './General/ButtonLocation'
// import Amount from './General/Amount'
import AditionalInfo from './General/AditionalInfo'
import Amount from './General/Amount'

export default function General(props) {
  return (
    <div className='general'>
        <div className='info'>
            <div className='location'>
                <h3>
                    {props.neighborhoodName}
                </h3>
                <div className='direction'>
                    <p>{props.local}</p>
                    <p>{props.location}</p>
                    <p>{props.neighborhoodLocation}</p>
                </div>
                <div className='btn-location'>
                    <ButtonLocation><i class="fa-regular fa-heart"></i></ButtonLocation>
                    <ButtonLocation><i class="fa-solid fa-share-nodes"></i></ButtonLocation>
                    <ButtonLocation><i class="fa-solid fa-print"></i></ButtonLocation>
                </div>
            </div>
    
            <div className='price'>
                <div className='btn-price'>
                    <ButtonLocation>Venta</ButtonLocation>
                    <ButtonLocation>alquiler</ButtonLocation>
                    <ButtonLocation>Alquieler Temporal</ButtonLocation>
                </div>
                <Amount
                    minPrice={props.minPrice}
                    maxPrice={props.maxPrice}
                />
            </div>
        </div>
        <div className='container-aditional-info'>
            <AditionalInfo
                data={props.lotsAvailable}
                descData="Lotes Disponibles"
            />
            <AditionalInfo
                data={props.distance}
                aditionalData="km"
                descData="Distancia de la Capital"
            />
            <AditionalInfo
                data={props.type}
                descData="Tipo de Propiedad"
            />
            <div className='aditional-info'>
                <p className='data'><i class="fa-solid fa-download"></i></p>
                <p className='desc'>Reglamento</p>
            </div>
        </div>
    </div>
  )
}