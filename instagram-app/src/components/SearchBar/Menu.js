import React from 'react';

import {
  Compass,
  Heart,
  User
} from 'react-feather'

const Menu = () => {
  return (
    <div className="menu">
      <a href="#explore">
        <Compass size="28" strokeWidth="1" />
      </a>
      <a href="#activity">
        <Heart size="28" strokeWidth="1" />
      </a>
      <a href="#account">
        <User size="28" strokeWidth="1" />
      </a>
    </div>
  )
}

export default Menu
