import React from 'react';

import {
  Compass,
  Heart,
  User
} from 'react-feather'

const Menu = () => {
  return (
    <div className="menu">
      <a href="">
        <Compass size="28" strokeWidth="1" />
      </a>
      <a href="">
        <Heart size="28" strokeWidth="1" />
      </a>
      <a href="">
        <User size="28" strokeWidth="1" />
      </a>
    </div>
  )
}

export default Menu
