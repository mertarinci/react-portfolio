import "./index.scss"
import MLogo from "../../../assets/images/MLogo.png"

import React, { useRef } from 'react'

const Logo = () => {

  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRed = useRef();



  return (
    <div className="logo-container">
      <img className="solid-logo" src={MLogo} alt="M" />
    </div>
  )
}

export default Logo