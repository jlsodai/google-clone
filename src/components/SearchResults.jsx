import { useContext, useEffect, useState } from 'react'
// import items from "../results.json";
import SearchResult from './SingleResult';
import { SearchContext } from '../appContext';
import useGoogleSearch from '../useGoogleSearch';
import { useSearchParams, Link } from 'react-router-dom';

const SearchResults = () => {
  // const { search } = useContext(SearchContext)
  const [searchParams] = useSearchParams();
  const [searchTerm] = useState(searchParams.get('s'))
  const { items } = useGoogleSearch(searchTerm)

  return (
    <main className="container">
      { items.error && <div>
        <div className="flex min-h-[calc(100vh-260px)] mb-40 justify-center text-center flex-col">
          <h1 className="text-[80px]">Check Again Tomorrow</h1>
          <div className="max-w-lg mx-auto">{items.error.message}</div>
          <div className="mt-8 justify-center items-center sm:flex">
            <Link to="" className="px-10 py-3.5 w-full bg-blue-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                View Static Results
            </Link>
          </div>
        </div>
      </div>}
      { items > 0 && <>
        <div className="py-3">About {items.searchInformation.formattedTotalResults} ({items.searchInformation.formattedSearchTime} seconds)</div>
        <div className="max-w-[660px] mt-2">
          {items.items.map((item, i) => (
            <SearchResult item={item} key={i} />
          ))}
        </div>
      </> }
    </main>
  )
}

export default SearchResults
