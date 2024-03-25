import React from 'react'
import Image from '../../image'

const Property = ({ imageUrl, title, type, location }) => {
  return (
    <th scope='row w-0'>
      <div className='d-flex align-items-center gap-3'>
        <Image src={imageUrl} width={110} height={170} />
        <div className='w-50'>
          <p>{title}</p>
          <span>
            {type} <br />{' '}
          </span>
          <span>{location} </span>
        </div>
      </div>
    </th>
  )
}

export default Property
