import React from 'react'
import Image from "next/image";
import Establishments from './LocationMap/Establishments';


export default function LocationMap(props) {
  return (
    <section className='location-map'>
        <h4>¿Que podes encontrar en {props.nameLocation}?</h4>
        <Image
          width={1920}
          height={900}
          className="w-100 h-100 cover img"
          src="/images/neighborhood/map.png"
          alt="map image"
        />
        <div className='info-container'>
            <div className='info-establishments'>
                <p><strong>Establecimiento ({props.numEstablishments})</strong></p>
                <p>Transporte y accesos</p>
                <p>Recomedaciones</p>
            </div>
            <Establishments 
                nameEstablishment="Escuela Primaria Nombre"
            linkLocation="Link a mapa de localidad"
            />
            <Establishments
                nameEstablishment="Hospital"
                linkLocation="Link a mapa de localidad"
            />
            <Establishments
                nameEstablishment="Banco"
                linkLocation="Link a mapa de localidad"
            />
        </div>

    </section>
)
}