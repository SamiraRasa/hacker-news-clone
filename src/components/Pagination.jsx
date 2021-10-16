import React from 'react';

const Pagination = ({ pageValue, nbPages, page }) => {

  function inputValueHandle(e) {
    e.preventDefault()
    pageValue(+e.target.value)
  }

  function paginationList(number, currentPage, x) {
    let list = []
    let previos = currentPage - x < 0 ? 0 : currentPage - x
    let next = currentPage + x > number ? number : currentPage + x
    for (let index = previos; index <= next; index++) {
      if (index == previos && index > 0) {
        list.push(<button key={index} value={currentPage - 1} onClick={inputValueHandle}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg></button>)
        continue
      }
      list.push(<button key={index} value={index} className={`p-3 ${index == currentPage ? 'border bg-transparent hover:opacity-75' : ''} hover:shodow`}
        onClick={inputValueHandle}> {index + 1}</button>)
      if (index == next && index < number) {
        list.push(<button key={"page" + index} value={currentPage + 1} onClick={inputValueHandle}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg></button>)
        break
      }
    }
    return list
  }

  return (
    <div className="md:mx-auto my-2">
      <a className='md:flex items-center justify-center'>
        {paginationList(nbPages, page, 3)}
      </a >

    </div>
  );
};

export default Pagination;