import React from 'react'

export default function Amount({ minPrice,maxPrice }) {
  return (
        <div className='amount'>
            <p><strong>De: {minPrice}</strong></p>
            <p><strong>A: {maxPrice}</strong></p>
            <p>Precion min / max</p>
        </div>
  )
}