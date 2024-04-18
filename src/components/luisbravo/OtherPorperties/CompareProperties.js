import React from 'react'
import ButtonLocation from '../General/ButtonLocation'
import Image from "next/image";

export default function CompareProperties(props) {
  return (
        <div className='property'>
            <div>
                <div className='house'>
                    <Image
                        width={580}
                        height={390}
                        className="w-100 h-100 cover img"
                        src="/images/neighborhood/property.png"
                        alt="property image"
                    />
                    <div className='info-house'>
                        <div className='state'>
                            <div className='btn-state'>
                                +
                            </div>
                            <div className='infor-state'>{props.state}</div>
                        </div>
                        <div className='price'>
                            <div className='total-amount'>
                                <span className='price-USD'>{props.priceUSD}USD</span>
                                <span className='price-ARS'>{props.priceARS}ARS</span>
                            </div>
                            <div className='price-btn'>
                                <ButtonLocation><i class="fa-regular fa-heart"></i></ButtonLocation>
                                <ButtonLocation><i class="fa-solid fa-arrow-up-right-from-square"></i></ButtonLocation>
                                <ButtonLocation><i class="fa-regular fa-square-plus"></i></ButtonLocation>
                            </div>
                        </div>
                    </div>
                    <div className='name-property'>
                        <div className='agent'>
                            <Image
                                width={114}
                                height={114}
                                className="w-100 h-100 cover img"
                                src="/images/neighborhood/agent-single-1.png"
                                alt="Agent"
                            />
                        </div>
                        <h3>Nombre de la propiedad</h3>
                        <p>{props.namePropety}</p>
                    </div>
                    <div className='property-characteristics'>
                        <div className='rooms'>
                            <p><i class="fa-solid fa-bed"></i>{props.beds}</p>
                            <p><i class="fa-solid fa-bath"></i>{props.bathrooms}</p>                                
                            <p><i class="fa-regular fa-square-full"></i>{props.mts2} mts2</p>
                            <a href='#'><i class="fa-solid fa-location-dot">Ver en el mapa</i></a>
                        </div>
                        <div>
                            <a href='#'>Barrio, emprendimiento (Link Página) - Partido (Link al partido en el mapa)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}