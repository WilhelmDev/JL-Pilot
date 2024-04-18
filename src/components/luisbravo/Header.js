import React from 'react'
import Image from "next/image";

export default function HeaderBienesRaices() {
  return (
    <header className='header-bienes-raices'>
        <Image
          width={200}
          height={114}
          className="img logo-bienes-raices"
          src={`/images/neighborhood/logo.svg`}
          alt="Agent image"
        />
      <div className='nav-container'>
        <div className='header-contact'>
          <div className='info-contact'>
            <i class="fa-solid fa-envelope"></i>
            <p>info@jlbienesraices.com.ar</p>
          </div>
          <div className='info-contact'>
            <i class="fa-solid fa-phone"></i>
            <p>0111566717961</p>
          </div>
          <div className='info-contact'>
            <i class="fa-brands fa-whatsapp"></i>
            <p>549 11 66717961</p>
          </div>
          <div className='social-icons'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-spotify"></i>
          </div>
        </div>
        <nav className='nav-menu'>
          <ul className='links-container'>
            <li><a href='#'>Incio</a></li>
            <li><a href='#'>Buscador</a></li>
            <li><a href='#'>Barios y countries</a></li>
            <li><a href='#'>Emprendimientos</a></li>
            <li><a href='#'>Quienes Somos</a></li>
            <li><a href='#'>Servicios</a></li>
          </ul>
          <ul className='nav-btn'>
            <li ><a href='#'><i class="fa-regular fa-heart"></i>Favoritos</a></li>
            <li ><a href='#'>Tasaciones</a></li>
            <li className='user-btn'><a><i class="fa-regular fa-circle-user"></i></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
