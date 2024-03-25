import React from 'react'

const Request = () => {
  return (
    <td>
      <div className='d-flex flex-column align-items-center gap-3'>
        <button
          type='button'
          class='btn btn-primary text-white py-2 px-3 rounded-0'
        >
          2 Visitas
        </button>
        <button
          type='button'
          class='btn btn-primary text-white py-2 px-3 rounded-0'
        >
          1 Permuta
        </button>
        <button
          type='button'
          class='btn btn-primary text-white py-2 px-3 rounded-0'
        >
          1 Tasacion
        </button>
        <p className='text-center'>
          12/01/2024 <br />
          (ultima solicitud)
        </p>
      </div>
    </td>
  )
}

export default Request
