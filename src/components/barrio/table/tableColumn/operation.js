// OperationsColumn.js
import React from 'react'

const Operation = ({ operations, visits }) => {
  return (
    <td className='pt-3 text-center'>
      <div className='my-1'>
        {operations} <br />
        operaciones
      </div>
      <div className='my-1'>
        {visits} <br />
        visitas
      </div>
      <button type='button' class='btn btn-outline-dark py-1 px-4 rounded-0'>
        Ver Lista
      </button>
    </td>
  )
}

export default Operation
