'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import HeaderV2 from '@/components/common/HeaderV2'
import Tabs from '@/components/pages/CruzL/tabs'
import Property from '@/components/pages/CruzL/custom-content/property'
import Neighborhood from '@/components/pages/CruzL/custom-content/neighborhood'
import Entrepreneurship from '@/components/pages/CruzL/custom-content/entrepreneurship'
import FooterL from '@/components/pages/CruzL/custom-footer'



export default function CruzL() {
    const [currentType, setCurrentType] = useState('1')

    const tabs = [
      { id: "buy", label: "Establecimiento (3)" },
      { id: "rent", label: "Transporte y accesos" },
      { id: "sold", label: "Alquiler temporal" },
    ];
  
    const items = [
      { id: "1", title: "Escuela Primaria Nombre" },
      { id: "2", title: "Hospital" },
      { id: "3", title: "Banco" },
    ];

    return(
        <>
            {/* Begin Header V2 */}
            <HeaderV2 />
            {/* End header V2 */}

            {/* Begin Content */}
            <main id='locations'>

                {/* Begin Banner Location */}
                <section className='carrousel'>
                    <Image
                        width={600}
                        height={200}
                        src={"/images/CruzL/carrousel.png"}
                        alt="static image"
                        layout='responsive'
                    />
                </section>
                {/* End Banner Location */}

                {/* Begin description */}
                <section className='description mb-5'>
                    <div className='map-box p-2'>

                        <div className='name'>
                            <h3 className='localidad-name'>Nombre de la localidad</h3>
                        </div>

                        <div className='map-box p-3 mb-2'>
                            <p><b>¿Qué podemos encontrar en <strong className='localidad-name'>[Nombre de la localidad]</strong>?</b></p>
                            <Image
                                width={600}
                                height={200}
                                src={"/images/CruzL/map-image.png"}
                                alt="static map"
                                layout='responsive'
                            />
                            <Tabs items={items} tabs={tabs}/>
                            <Link href={"/"}>
                                <span className='text-decoration-underline fw-bold'>Ver propiedad de la localidad</span>
                            </Link>
                        </div>

                    </div>
                </section>
                {/* End description */}

                {/* Begin Propertys */}
                <section className='propertys'> 
                    <div className='title'>
                    <h1><strong className='quantity-propertys'>[Cantidad]</strong> Propiedades Disponibles en esta localidad</h1>
                    <p className='save-text'>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                    </div>
                    <div className='content'>
                    <div className='button-container'>
                        <button className={`btn-custom ${currentType === '1' && 'active'}`}>
                        Venta
                        </button>
                        <button className={`btn-custom ${currentType === '2' && 'active'}`}>
                        Alquiler
                        </button>
                        <button className={`btn-custom ${currentType === '3' && 'active'}`}>
                        Alquiler Temporal
                        </button>
                    </div>
                    <div className='gallery'>
                        <Property />
                        <Property />
                    </div>
                    <p className='expand-button text-uppercase h5'><strong>Cargar Más</strong></p>
                    </div>
                </section>
                {/* End Propertys */}

                {/* Begin Neighborhoods */}
                <section className='neighborhoods'>
                    <div className='title'>
                    <h1><strong className='quantity-neighbor'>[Cantidad]</strong> Barrios en esta localidad</h1>
                    <p className='save-text'>Puedes guardar y seleccionar las que te gusten y compararlas</p>
                    </div>
                    <div className='content'>
                    <div className='button-container'>
                        <button className={`btn-custom ${currentType === '1' && 'active'}`}>
                            Todos
                        </button>
                        <button className={`btn-custom ${currentType === '2' && 'active'}`}>
                            Abiertos
                        </button>
                        <button className={`btn-custom ${currentType === '3' && 'active'}`}>
                            Semi Cerrados
                        </button>
                        <button className={`btn-custom ${currentType === '5' && 'active'}`}>
                            Privados
                        </button>
                        <button className={`btn-custom ${currentType === '6' && 'active'}`}>
                            Country Club
                        </button>
                        </div>
                    <div className='gallery'>
                        <Neighborhood />
                        <Neighborhood />
                    </div>
                    </div>
                    <p className='expand-button text-uppercase h5'><strong>Cargar Más</strong></p>
                </section>
                {/* End Neighborhoods */}

                {/* Begin Entrepreneurship */}
                <section className='entrepreneurships'>
                    <div className='title'>
                    <h1><strong className='quantity-enterp'>[Cantidad]</strong> Emprendimientos en esta localidad</h1>
                    <p className='save-text'>Si quieres invertir en tu casa del futuro aquí encontraras los emprendimientos que te ofrecemos</p>
                    </div>
                    <div className='content'>
                    <div className='gallery'>
                        <Entrepreneurship />
                        <Entrepreneurship />
                    </div>
                    </div>
                    <p className='expand-button text-uppercase h5'><strong>Cargar Más</strong></p>
                </section>
                {/* End Entrepreneurship */}

            </main>
            {/* End Content */}

            {/* Start Our Footer */}
            <section className="footer-style1 pt60 pb-0">
                <FooterL />
            </section>
            {/* End Our Footer */}
        </>
    )
}