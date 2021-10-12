import React from 'react';

const Pagination = ({ pageValue, nbPages }) => {

  function inputValueHandle(e) {
    pageValue(+e.target.innerText - 1)
  }

  function paginationList(number) {
    let list = []
    for (let index = 0; index < number; index++) {
      list.push(<a key={"page" + index} className='text-white p-1' onClick={inputValueHandle}> {index + 1} </a>)
    }
    return list
  }

  return (
    <nav>
      <ul className='pagination flex items-center justify-center '>
        {paginationList(nbPages)}
      </ul>
    </nav>
  );
};

export default Pagination;