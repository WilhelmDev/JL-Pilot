import GraphTabAgent from '@/components/tab-agent/Graph'
import Pagination from '@/components/blog/Pagination'
import Image from 'next/image'
import React from 'react'
import HeaderV2 from '@/components/common/HeaderV2'
import MobileMenu from '@/components/common/mobile-menu'
import FooterTabAgent from '@/components/tab-agent/Footer'
import SidebarTabAgent from '@/components/tab-agent/Sidebar'

export const metadata = {
  title: 'Tablero de agente || Homez - Real Estate NextJS Template'
}

const AgentTabHome = ({ params }) => {
  return (
    <>
      {/* Begin Header */}
      <HeaderV2 />
      {/* End Header */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      <main className='row' id='tab-agent'>
        {/* Begin SideBar */}
        <div className='col-2 p-0' id='sidebar-tab-agent'>
          <SidebarTabAgent />
        </div>
        {/* End SideBar */}
        {/* Begin Content */}
        <div className='col-10 p-0' id='content'>
          <section className='main-content' id='agent-tab-home'>
            <div className='info-user-cont mb-5'>
              <p className='welcome-user'>Todos los Barrios</p>
              <span>Que bueno verte nuevamente por aquí</span>
            </div>
            <div className='d-flex gap-5 mb-5'>
              <div className='search_container'>
                <span className='flaticon-search' />
                <input
                  type='text'
                  className='search_bar'
                  placeholder='Buscar'
                />
              </div>

              <div class='input-group' style={{ width: '30%' }}>
                <select class='form-select' id='inputGroupSelect01'>
                  <option selected disabled>
                    {' '}
                    Ordenar por: Nombre A - Z
                  </option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div>
                <button type='button' className='custom-btn'>
                  Agregar Nuevo
                </button>
              </div>
            </div>

            <table class='table'>
              <thead>
                <tr>
                  <th scope='col' className='text-center'>
                    Propiedad y detalles
                  </th>
                  <th scope='col' className='text-center'>
                    Precio x <br />
                    Operación
                  </th>
                  <th scope='col' className='text-center'>
                    Solicitudes
                  </th>
                  <th scope='col' className='text-center w-25'>
                    Ultima Acción
                  </th>
                  <th scope='col' className='text-center'>
                    Favoritos y <br />
                    Compartido
                  </th>
                  <th scope='col' className='text-center align-items-center'>
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row w-0'>
                    <div className='d-flex align-items-center gap-3'>
                      <Image
                        src='/images/casa.jpg'
                        alt='casa'
                        width={110}
                        height={170}
                      />
                      <div className='w-50'>
                        <p>Nombre el barrio</p>
                        <span>
                          Tipo de barrio <br />{' '}
                        </span>
                        <span>localidad </span>
                      </div>
                    </div>
                  </th>
                  <td className='pt-3 text-center'>
                    <div className='my-1'>
                      16 <br />
                      operaciones
                    </div>
                    <div className='my-1'>
                      2 <br />
                      visitas
                    </div>
                    <button
                      type='button'
                      class='btn btn-outline-dark py-1 px-4 rounded-0'
                    >
                      Ver Lista
                    </button>
                  </td>
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
                  <td class=''>
                    <div className='p-5 '>
                      <p>nombre de usuarioS solicito una visita</p>
                    </div>
                  </td>
                  <td class=''>
                    <div className='d-flex flex-column align-items-center gap-2 mt-4'>
                      <Image
                        src='/images/corazon.jpg'
                        alt='corazon'
                        width={25}
                        height={23}
                      />
                      2 Favoritos
                      <Image
                        src='/images/compartir.jpg'
                        alt='corazon'
                        width={25}
                        height={23}
                      />
                      compartido 10
                    </div>
                  </td>
                  <td class=''>
                    <div className='d-flex flex-row flex-wrap align-items-center gap-2 mt-4'>
                      <div className='box_icon'>
                        <Image
                          src='/images/trash.jpg'
                          alt='corazon'
                          width={17}
                          height={16}
                        />
                      </div>
                      <div className='box_icon'>
                        <Image
                          src='/images/edit.jpg'
                          alt='corazon'
                          width={17}
                          height={16}
                        />
                      </div>
                      <div className='box_icon'>
                        <Image
                          src='/images/compartir.jpg'
                          alt='corazon'
                          width={17}
                          height={16}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='d-flex justify-content-center mt-3'>
              <Pagination />
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <p>1-5 de 300+ Propiedades</p>
            </div>
          </section>

          <FooterTabAgent />
        </div>
        {/* End Content */}
      </main>
    </>
  )
}

export default AgentTabHome
