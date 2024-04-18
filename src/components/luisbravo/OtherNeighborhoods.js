import React from 'react'
import ButtonLocation from './General/ButtonLocation'
import TitleSection from './TitleSection'
import Neighborhoods from './OtherNeighborhoods/Neighborhoods'

export default function OtherNeighborhoods() {
  return (
    <section className='other-neighborhoods'>
            <TitleSection 
                title="Otros Barrios que pueden Interesarte"
                desc="Puedes guardar y seleccionar las que te gusten y compararlas"
            />
            <div>
                <ButtonLocation>Todos</ButtonLocation>
                <ButtonLocation>Abiertos</ButtonLocation>
                <ButtonLocation>Semi Cerrados</ButtonLocation>
                <ButtonLocation>Privados</ButtonLocation>
                <ButtonLocation>Country Clup</ButtonLocation>
            </div>
            <div className='container-neighborhoods'>
                <Neighborhoods
                    availability="10"
                    minPrice="25.000"
                    maxPrice="150.000"
                    units="20"
                    available="5"
                    mts2="1200"
                />
                <Neighborhoods
                    availability="10"
                    minPrice="25.000"
                    maxPrice="150.000"
                    units="20"
                    available="5"
                    mts2="1200"
                />
            </div>
    </section>
  )
}
