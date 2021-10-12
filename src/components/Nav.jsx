import React from 'react'

export const Nav = () => {
  return (
    <div className="navbar bg-gray-100 dark:bg-black mg-gray-100 text-sm">

      <a href="/" className='font-bold text-black  dark:text-withe'>
        Hacker News
      </a> |
      <a href="/"> new </a> |
      <a href="/"> threads </a> |
      <a href="/"> comments </a> |
      <a href="/"> ask </a> |
      <a href="/"> show </a> |
      <a href="/"> jobs </a> |
      <a href="/"> submit </a> |
      <a href="/" className="mr-0">
        login
      </a>
    </div >
  )
}
