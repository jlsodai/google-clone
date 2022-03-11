import React from 'react'
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MenuIcon from '../components/MenuIcon';
import Avatar from '../components/Avatar';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import TopLinks from '../components/TopLinks';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('s'))
  const navigate = useNavigate();

  const searched = (e) => {
    e.preventDefault()
    navigate('/search?s=' + searchTerm)
  }

  return (
    <>
      <div className="flex justify-between mx-6 mt-6 items-center">
        <div className="flex shrink items-center space-x-4">
          <img className="w-[86px] h-full mr-7" src="/images/logo_small.png" alt="" />
          <form onSubmit={searched}>
            <SearchBar onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
          </form>
        </div>
        <div className="flex self-center space-x-2 items-center shrink-0">
          <MenuIcon />
          <Avatar />
        </div>
      </div>

      <nav className="mt-3">
        <TopLinks />
      </nav>

      <main className="container">
        <div className="py-3">About 177,000,000 results (0.65 seconds)</div>
      </main>

      <div className="container">Results Section Goes Here</div>
      <footer className="container">Footer Section Goes Here</footer>
    </>
  )
}

export default SearchPage
