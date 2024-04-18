import React from 'react'
import TitleSection from './TitleSection'
import ButtonLocation from './General/ButtonLocation'
import CompareProperties from './OtherPorperties/CompareProperties'

export default function OtherProperties() {
  return (
    <section className='other-properties'>
        <TitleSection
            num="5"
            title="Propiedades Disponibles"
            desc="Puedes guardar y seleccionar las que te gusten y comparalas"
        />
        <ButtonLocation>Todas</ButtonLocation>
        <ButtonLocation>Venta</ButtonLocation>
        <ButtonLocation>Alquiler</ButtonLocation>
        <ButtonLocation>Alquiler Temporal</ButtonLocation>

        <div className='properties-container'>
            <CompareProperties 
                state="En alquiler"
                priceUSD="140.000"
                priceARS="1.400.000"
                namePropety="Casa"
                beds="1"
                bathrooms="2"
                mts2="1200"
            />
            <CompareProperties 
                state="En alquiler"
                priceUSD="140.000"
                priceARS="1.400.000"
                namePropety="Casa"
                beds="1 cama"
                bathrooms="2 baños"
                mts2="1200"
            />
        </div>
        <a href='#' className='more-info'>CARGAR MAS</a>
    </section>
  )
}