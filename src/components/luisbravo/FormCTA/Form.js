import React from 'react'
import ButtonLocation from '../General/ButtonLocation'

export default function Form(props) {
  return (
    <div className='form'>
        <div className='options-btn'>
            <ButtonLocation addClassName="active">Solicitar una visita</ButtonLocation>
            <ButtonLocation>Ofrecer permuta</ButtonLocation>
        </div>
        <p>Elejí tu dia preferido</p>
        <div className='more-options-btn'>
            <ButtonLocation addClassName="active">Llamada</ButtonLocation>
            <ButtonLocation>En persona</ButtonLocation>
        </div>
        <form>
            <ul>
                <li>
                    <input className='input' type="date" placeholder="Día y hora preferido" name="date" />
                </li>
                <li>
                    <input className='input' type="text" placeholder="Nombre" name="user_name" />
                </li>
                <li>
                    <input className='input' type="phone" placeholder="Teléfono" name="user_name" />
                </li>
                <li>
                    <input className='input' type="email" placeholder="Email" name="user_mail" />
                </li>
                <li>
                    <textarea className='input' name="user_message" placeholder="Escríbenos"></textarea>
                </li>
                <li className='list-btn'>
                    <ButtonLocation>Enviar Solicitud</ButtonLocation>
                </li>
            </ul>
        </form>
    </div>
  )
}
