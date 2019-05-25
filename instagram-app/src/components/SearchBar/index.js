import React from 'react'
import './index.css'

import Logo from './Logo'
import Search from './Search'
import Menu from './Menu'

const SearchBar = (props) => {
  return (
    <header className="search-bar">
      <div className="container">
        <Logo />
        <Search search={props.search} handleSearchChange={props.handleSearchChange} />
        <Menu />
      </div>
    </header>
  )
}

export default SearchBar
