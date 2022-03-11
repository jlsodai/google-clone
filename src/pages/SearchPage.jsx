import React from 'react'
import TopLinks from '../components/TopLinks';
import SearchFooter from '../components/SearchFooter';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  return (
    <>
      <SearchHeader />
      <TopLinks />
      <SearchResults />
      <SearchFooter />
    </>
  )
}

export default SearchPage
