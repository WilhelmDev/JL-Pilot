import React from 'react'

export default function ButtonLocation({ children, addClassName }) {
  return (
            <button className={addClassName ? addClassName + " " + "btn" : "btn"}>{children}</button>
  )
}