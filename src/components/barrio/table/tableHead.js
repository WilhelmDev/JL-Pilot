'use client'
import React from 'react'
import TableRow from './tableRow'

const TableHead = () => {
  const properties = [
    {
      imageUrl: '/images/casa.jpg',
      title: 'Nombre el barrio',
      type: 'villa',
      location: 'localidad',
      operations: 16,
      visits: 2
    },
    {
      imageUrl: '/images/casa.jpg',
      title: 'Nombre el barrio',
      type: 'villa',
      location: 'localidad',
      operations: 16,
      visits: 2
    }
  ]

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col' className='text-center'>
            Propiedad y detalles
          </th>
          <th scope='col' className='text-center'>
            Precio x Operación
          </th>
          <th scope='col' className='text-center'>
            Solicitudes
          </th>
          <th scope='col' className='text-center w-25'>
            Última Acción
          </th>
          <th scope='col' className='text-center'>
            Favoritos y Compartido
          </th>
          <th scope='col' className='text-center align-items-center'>
            Acción
          </th>
        </tr>
      </thead>
      <tbody>
        {properties.map((property, index) => (
          <tr key={index}>
            <TableRow {...property} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableHead
