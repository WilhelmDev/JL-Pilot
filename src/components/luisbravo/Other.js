import React from 'react'
import TitleSection from './TitleSection'
import CompareProperties from './OtherPorperties/CompareProperties'

export default function Other() {
  return (
    <section className='other'>
            <TitleSection 
                title="Otras propiedades que te pueden interesar"
                desc="Puedes guardar y seleccionar las que te gusten y compararlas"
            />
            <div className='properties-container'>
                <CompareProperties 
                    state="En alquiler"
                    priceUSD="140.000"
                    priceARS="1.400.000"
                    namePropety="Casa"
                    beds="1 cama"
                    bathrooms="2 baños"
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
    </section>
  )
}
