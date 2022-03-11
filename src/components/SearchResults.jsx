import React from 'react'
import results from "../results.json";
import SearchResult from './SingleResult';

const SearchResults = () => {
  return (
    <main className="container">
        <div className="py-3">About {results.searchInformation.formattedTotalResults} ({results.searchInformation.formattedSearchTime} seconds)</div>

        <div className="max-w-[660px] mt-2">
          {results.items.map((item, i) => (
            <SearchResult item={item} key={i} />
          ))}
        </div>
      </main>
  )
}

export default SearchResults
