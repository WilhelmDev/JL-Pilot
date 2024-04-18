import React from 'react'
import ButtonLocation from '../General/ButtonLocation'

export default function Establishments(props) {
    return (
    
            <div className='establishments-container'> 
                <div className='establishments'>
                    <div className='info'>
                        <div className='establishments-img'>
                            IMG
                        </div>
                        <div className='name-establishment'>
                            <h4>{props.nameEstablishment}</h4>
                            <a href='#'>Ubicacion:({props.linkLocation})</a>
                        </div>
                    </div>
                    <ButtonLocation>Mas Info</ButtonLocation>
                </div>
            </div>
    )
}