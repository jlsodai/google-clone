import React from 'react'
import { useContext } from 'react';
import { SearchContext } from '../appContext';

const SearchPage = () => {
  const {search, } = useContext(SearchContext)
  return (
    <div>Search Page Goes { search }</div>
  )
}

export default SearchPage
