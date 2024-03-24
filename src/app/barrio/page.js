import GraphTabAgent from '@/components/tab-agent/Graph'
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
            <div className='d-flex gap-5'>
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
          </section>

          <FooterTabAgent />
        </div>
        {/* End Content */}
      </main>
    </>
  )
}

export default AgentTabHome
