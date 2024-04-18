import React from 'react'
import TitleSection from './TitleSection'
import EntrepreneurshipCard from './Entrepreneurship/EntrepreneurshipCard'

export default function Entrepreneurships() {
  return (
    <section className='entrepreneurship'>
            <TitleSection 
                title="emprendimientos"
                desc="Si quieres invertir en tu casa del futuro aquí encontraras los emprendimientos que te ofrecemos"
            />

            <div className='entrepreneurship-container'>
                <EntrepreneurshipCard 
                    availability="10"
                    minPrice="25.000"
                    maxPrice="150.000"
                    nameEntrepreneurship="Nombre del empredimiento" 
                    units="20"
                    available="5"
                    mts2="1200"               
                />
                <EntrepreneurshipCard 
                    availability="10"
                    minPrice="25.000"
                    maxPrice="150.000"
                    nameEntrepreneurship="Nombre del empredimiento" 
                    units="20"
                    available="5"
                    mts2="1200"               
                />
            </div>

    </section>
  )
}
