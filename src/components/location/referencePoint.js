import Image from 'next/image'
import React from 'react'

export default function ReferencePoint() {
  return (
    <div className="row">
      <table class="table custom-table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Tipo</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Logo</th>
      <th scope="col">Ubicacion</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >Nombre A</td>
      <td>Selección</td>
      <td>Descripción</td>
      <td>(Link IMG / PNG)</td>
      <td>(Mapa)</td>
      <td>LINK</td>
      <span className='icons-container'>
        <Image src={'/images/custom/pencil.svg'} alt='pencil' height={30} width={30} className='icon'/>
        <Image src={'/images/custom/trash.svg'} alt='pencil' height={30} width={30} className='icon'/>
      </span>
    </tr>
    <tr>
    <td >Nombre B</td>
      <td>Selección</td>
      <td>Descripción</td>
      <td>(Link IMG / PNG)</td>
      <td>(Mapa)</td>
      <td>LINK</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
