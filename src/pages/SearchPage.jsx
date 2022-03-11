import React from 'react'
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MenuIcon from '../components/MenuIcon';
import Avatar from '../components/Avatar';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import TopLinks from '../components/TopLinks';
import results from "../results.json";
import SearchResult from '../components/SearchResult';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('s'))
  const navigate = useNavigate();

  const searched = (e) => {
    e.preventDefault()
    navigate('/search?s=' + searchTerm)
  }

  console.log(results.items)

  return (
    <>
      <div className="flex justify-between mx-6 mt-6 items-center">
        <div className="flex shrink items-center space-x-4">
          <img className="w-[86px] h-full mr-7" src="/images/logo_small.png" alt="" />
          <form onSubmit={searched}>
            <SearchBar onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
          </form>
        </div>
        <div className="md:flex self-center space-x-2 items-center shrink-0 hidden">
          <MenuIcon />
          <Avatar />
        </div>
      </div>

      <nav className="mt-3">
        <TopLinks />
      </nav>

      <main className="container">
        <div className="py-3">About {results.searchInformation.formattedTotalResults} ({results.searchInformation.formattedSearchTime} seconds)</div>

        <div className="max-w-[660px] mt-2">
          {results.items.map((item, i) => (
            <SearchResult item={item} key={i} />
          ))}
        </div>
      </main>

      <footer className="bg-[#f2f2f2] text-[#70757a]">
        <div className="border-b py-3">
          <div className="container"><strong>Project By:</strong> Julius A. Odai</div>
        </div>
        <div className="container space-x-10 py-3">
          <Link to="">Help</Link>
          <Link to="">Send feedback</Link>
          <Link to="">Privacy</Link>
          <Link to="">Terms</Link>
        </div>
      </footer>
    </>
  )
}

export default SearchPage
