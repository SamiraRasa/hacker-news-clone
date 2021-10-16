import React from "react";


const Search = ({ searchValue }) => {

  function inputValueHandle(e) {
    let timer = null
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchValue(e.target.value)
    }, 3000);

  }

  return (
    <div className="md:flex w-1/2 items-center z-negative  relative rounded-full shadow-l mx-auto ">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 z-10 absolute right-0 fill-current opacity-50 hover:opacity-75 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input className="md:py-4 px-6 shadow-lg bg-transparent border-2 border-red-300 w-full z-0 rounded-full leading-tight focus:outline-none" type="text" placeholder="Search"
        onChange={inputValueHandle}
      />

    </div>
  );
}

export default Search;