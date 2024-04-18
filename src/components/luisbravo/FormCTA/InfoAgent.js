import React from 'react'
import Image from "next/image";
import ButtonLocation from '../General/ButtonLocation';

export default function InfoAgent(props) {
  return (
        <div className='agent'>
            <h4>Más información</h4>
            <div className='info-agent'>
                <Image
                    width={114}
                    height={114}
                    className="cover img"
                    src={`/images/neighborhood/agent-${props.imgAgent}.png`}
                     alt="Agent image"
                />
                <div>
                    <p className='name'>{props.nameAgent}</p>
                    <p className='phone'><i class="fa-solid fa-phone"></i>{props.phoneAgent}</p>
                    <a href={props.listed} className='listed'>Ver casas listadas</a>
                </div>
            </div>
            <ButtonLocation>CONTACTAR AGENTE</ButtonLocation>
        </div> 
  )
}
