import React, { useState, useEffect } from 'react';
import { Nav } from "./components/Nav";
import { Post } from "./components/Post";
import { Footer } from "./components/Footer";
import Search from "./components/Search";
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([])
  const [nbPages, setNbPages] = useState()
  const [load, setLoad] = useState(true)

  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')

  function pageValue(value) {
    setPage(value)
  }

  function searchValue(value) {
    setSearch(value)
    setPage(0)
  }

  useEffect(() => {
    getInputValue(search, page)
  }, [page, search])

  useEffect(() => {
    getInputValue()
  }, [])

  function getInputValue(search = '', page = 0) {
    setLoad(true)
    axios.get(`http://hn.algolia.com/api/v1/search?query=${search}&page=${page}&tags=story`).then(res => {
      setPosts(res.data.hits)
      setNbPages(res.data.nbPages)
      setLoad(false)
    })
  }

  return (
    <div className="container bg-gray-50 mx-auto">
      <Nav />
      <Search searchValue={searchValue} />
      {load ? <div>Loading...</div> : <Post allPosts={posts} />}
      <Pagination pageValue={pageValue} nbPages={nbPages} />
      <Footer />
    </div>
  );
}

export default App;
