import React from 'react'

export const Nav = () => {
  return (
    <nav className="md:flex hidden my-4 mx-4 justify-between">
      <ul data-menu className="md:flex hidden items-center justify-start">
        <li className="md:px-4 py-2">
          <a href="/" className="font-bold hover:text-gray-500 hover:opacity-75">New</a>
        </li>
        <li className="md:px-4 py-2">
          <a href="/" className="hover:text-gray-500 hover:opacity-75">Threads</a>
        </li>
        <li className="md:px-4 py-2">
          <a href="/" className="hover:text-gray-500 hover:opacity-75">Comments</a>
        </li>
        <li className="md:px-4 py-2">
          <a href="/" className="hover:text-gray-500 hover:opacity-75">Ask</a>
        </li>
        <li className="md:px-4 py-2">
          <a href="/" className="hover:text-gray-500 hover:opacity-75">Show</a>
        </li>
        <li className="md:px-4 py-2">
          <a href="/" className="hover:text-gray-500 hover:opacity-75">Job</a>
        </li>
        <li className="md:px-6 py-2">
          <a href="/" className="hover:text-gray-500 hover:opacity-75">Submit</a>
        </li>
      </ul>
      <ul className="navbar md:flex hidden items-center justify-start">

        <div className="w-full md:flex hidden items-center justify-between">
          <a href="#" className="md:flex items-center justify-center bg-transparent px-4 py-2 rounded border-red-300 border-2 hover:opacity-75">Login</a>
        </div>
      </ul>
    </nav >
  )
}
