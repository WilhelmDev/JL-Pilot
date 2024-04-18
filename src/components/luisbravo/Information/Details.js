import React from 'react'

export default function DetailsNeighborhood({ details,data }) {
  return (
        <div className='detail'>
            <p className='data-name'><strong>{details}</strong></p>
            <p>{data}</p>
        </div>
  )
}