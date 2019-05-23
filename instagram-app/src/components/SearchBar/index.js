import React from 'react'

import Logo from './Logo'
import Search from './Search'
import Menu from './Menu'

const SearchBar = () => {
  return (
    <header className="search-bar">
      <div className="container">
        <Logo />
        <Search />
        <Menu />
      </div>
    </header>
  )
}

export default SearchBar
