import React from 'react'

export default function MoreInfo(props) {
  return (
    <div className='more-info'>
        <h4>Más Informacion</h4>
        <p>{props.moreInfo}</p>
    </div>
  )
}
