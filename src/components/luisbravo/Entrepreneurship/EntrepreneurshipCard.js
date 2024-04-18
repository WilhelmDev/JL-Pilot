import React from 'react'
import Image from "next/image";


export default function EntrepreneurshipCard(props) {
  return (

        <div className='card'>
                
            <div className='info-entrepreneurship'>
                <div className='state'>
                    <div className='btn-state'>
                        {props.availability}
                    </div>
                    <div className='info-state'>Propiedades Disponibles</div>
                </div>

                <div className='price'>   
                    <span className='min-price'>Desde {props.minPrice}USD</span>
                    <span className='max-price'>A {props.maxPrice}USD</span>
                </div>
            </div>
            <Image
                width={500}
                height={400}
                className="w-100 h-100 cover img"
                src="/images/neighborhood/entrepreneurship.png"
                alt="entrepreneurship image"
            />
            <div className='entrepreneurship-characteristics'>
                <h4>{props.nameEntrepreneurship}</h4>
                <div >
                    <div className='characteristics'>
                        <p><i class="fa-solid fa-car-rear"></i>{props.units} Unidades en total</p>
                        <p><i class="fa-solid fa-shower"></i>{props.available} Disponibles</p>                                
                        <p><i class="fa-regular fa-square-full"></i>{props.mts2} mts2</p>
                        <a href='#'><i class="fa-solid fa-location-dot">Ver en el mapa</i></a>
                    </div>
                    <div>
                        <a href='#'>Barrio (Link Página) - Partido (Link al partido en resultados de búsqueda en mapa)</a>
                    </div>
                </div>
            </div>

        </div>

  )
}
