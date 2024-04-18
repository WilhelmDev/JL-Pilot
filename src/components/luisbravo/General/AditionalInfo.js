import React from 'react'

export default function AditionalInfo({ data, descData, aditionalData }) {
  return (
        <div className='aditional-info'>
            <p className='data'>{data}<span>{aditionalData}</span></p>
            <p className='desc'>{descData}</p>
        </div>
  )
}