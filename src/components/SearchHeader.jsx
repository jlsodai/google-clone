import React from 'react'
import SearchBar from './SearchBar';
import MenuIcon from './MenuIcon';
import Avatar from './Avatar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const SearchHeader = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('s'))
  const navigate = useNavigate();

  const searched = (e) => {
    e.preventDefault()
    navigate('/search?s=' + searchTerm)
  }

  return (
    <div className="flex justify-between mx-6 mt-6 items-center">
      <div className="flex shrink items-center space-x-4">
        <img className="w-[86px] h-full mr-7" src="/images/logo_small.png" alt="" />
        <form onSubmit={searched}>
          <SearchBar onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
        </form>
      </div>
      <div className="sm:flex self-center space-x-2 items-center shrink-0 hidden">
        <MenuIcon />
        <Avatar />
      </div>
    </div>
  )
}

export default SearchHeader
