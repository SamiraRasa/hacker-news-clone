import React from "react";

const Search = ({ searchValue }) => {

  function inputValueHandle(e) {
    searchValue(e.target.value)
  }
  return (
    <div className="search">
      <input className='shadow-lg rounded-sm my-3 mx-auto'
        onChange={inputValueHandle}
      />
    </div>
  );
}

export default Search;