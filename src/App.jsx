import React, { useState, useEffect } from 'react';
import { Nav } from "./components/Nav";
import { Post } from "./components/Post";
import { Footer } from "./components/Footer";
import Search from "./components/Search";
import axios from 'axios';
import Pagination from './components/Pagination';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { Result } from 'postcss';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  width:73.3%;
  margin:0 auto;
 
`;


function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

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
    fetchData(search, page)
  }, [search, page])


  useEffect(() => {
    fetchData()
  }, [])
  const [highlits, setHighleits] = useState('')


  function fetchData(search = '', page = 0) {
    setLoad(true)
    axios.get(`http://hn.algolia.com/api/v1/search?query=${search}&page=${page}&tags=story&`).then(res => {
      setPosts(res.data.hits)
      console.log(res.data.hits)
      setNbPages(res.data.nbPages)
      setLoad(false)
      // setHighleits(res.data.hits)
    })
  }

  // posts.search('query', {
  //   attributesToHighlight: [
  //     'title',
  //     'content'
  //   ]
  // }).then(({ hits }) => {
  //   console.log(hits);
  // });



  return (

    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        <button className='pt-4 pl-4' onClick={() => themeToggler()}>
          <svg className=" fill-current hover:opacity-75 animate-bounce w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <Nav />
        <Search searchValue={searchValue} />
        {load ? <div className='mx-auto'><p className="font-extrabold text-center">Loading...</p></div> :
          <Post allPosts={posts} search={highlits} />}
        <Pagination pageValue={pageValue} nbPages={nbPages} page={page} />
        <Footer />
      </StyledApp>
    </ThemeProvider>

  );
}

export default App;

