import React from 'react';

const Search = (props) => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search"
        value={props.search}
        onChange={props.handleSearchChange}
      />
    </div>
  )
}

export default Search
