import React from 'react'
import Image from "next/image";
import ButtonLocation from './General/ButtonLocation';
import InfoAgent from './FormCTA/InfoAgent';
import MoreInfo from './FormCTA/MoreInfo';
import Form from './FormCTA/Form';

export default function FormCTA(props) {
  return (
    <section className='form'>
            <div className='info'>
                <InfoAgent
                    imgAgent="single-1"
                    nameAgent="Agente 1"
                    phoneAgent="(920) 012-3421"
                    listed="#"
                />
                <MoreInfo
                    moreInfo="Hola, aquí pondremos información a cerca de los horarios de visita posible que ofrece JL ademas de las posibles ofertas qeu están dispuestos a recibir por permuta de una propiedad."
                />
            </div>
            <Form/>
    </section>
  )
}
