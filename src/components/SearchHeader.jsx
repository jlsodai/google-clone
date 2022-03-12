import React from 'react'
import SearchBar from './SearchBar';
import MenuIcon from './MenuIcon';
import Avatar from './Avatar';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchHeader = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('s')
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery])

  const searched = (e) => {
    e.preventDefault()
    navigate('/search?s=' + searchTerm)
  }

  return (
    <div className="flex justify-between mx-6 mt-6 items-center">
      <div className="flex shrink items-center space-x-4">
        <Link to="/"><img className="w-[86px] h-full mr-7" src="/images/logo_small.png" alt="" /></Link>
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
