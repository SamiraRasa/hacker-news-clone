import React from 'react';


export const Footer = () => {
  return (
    <div className='footer bg-indigo-900 text-white text-sm'>
      <div className='liner'></div>
      <a href="/">Guidelines</a> |
      <a href="/">FAQ</a> |
      <a href="/">Lists</a>|
      <a href="/"> API</a>|
      <a href="/">Security </a>|
      <a href="/">Legal</a>|
      <a href="/">Apply to YC</a>|
      <a href="/"> Contact</a>
      <div className="search ">
        <label htmlFor="">Search: </label>
        <input className='shadow-lg rounded-sm my-3 mx-auto' type="search" onInput='search(e)' />

      </div>

    </div>
  )

}