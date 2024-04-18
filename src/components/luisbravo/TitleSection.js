import React from 'react'

export default function TitleSection({ num, title, desc }) {
  return (
        <div className='title-section'>
            <h3>{num} {title}</h3>
            <p>{desc}</p>
        </div>
  )
}