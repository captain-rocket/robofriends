import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (

    <div className='pa2'>
      <input className='pa3 white bn bg-black shadow-5 o-70 glow'
      type='search' 
      placeholder='Search Robots' 
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;