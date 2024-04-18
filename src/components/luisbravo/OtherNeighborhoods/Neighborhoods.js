import React from 'react'
import Image from "next/image";

export default function Neighborhoods(props) {
  return (
    <div className='card'>
                
    <Image
        width={500}
        height={400}
        className="w-100 cover img"
        src="/images/neighborhood/neighborhoods.png"
        alt="entrepreneurship image"
    />
    <div className='info-neighborhoods'>
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
    <div className='neighborhoods-characteristics'>
        <div >
            <div className='characteristics'>
                <p><i class="fa-solid fa-house"></i>{props.units} Unidades en total</p>
                <p>{props.available} Disponibles</p>                                
                <p><i class="fa-regular fa-square-full"></i>{props.mts2} mts2</p>
                <a href='#'><i class="fa-solid fa-location-dot">Ver en el mapa</i></a>
            </div>
        </div>
    </div>

</div>
  )
}
