import React from 'react'
import logo from './img/LekhanFinal.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} height='200' width='200' alt="logo" />
    </div>
  )
}

export default Logo