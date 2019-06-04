import React from 'react';
import InstaLogo from './insta-logo.png'
import { Instagram } from 'react-feather'

const Logo = () => {
  return (
    <div className="logo">
      <span>
        <Instagram size="28" strokeWidth="1" />
        <div className="divider" />
        <img src={InstaLogo} alt="Instagram" />
      </span>
    </div>
  )
}

export default Logo
