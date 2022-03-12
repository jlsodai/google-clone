import { useState } from 'react'
import staticItems from "../results.json";
import SearchResult from './SingleResult';
import useGoogleSearch from '../useGoogleSearch';
import { useSearchParams, Link } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm] = useState(searchParams.get('s'))
  let { items } = useGoogleSearch(searchTerm)
  let errorFetching = false

  if (items.error) { errorFetching = true }
  if (searchParams.get('static')) {
    errorFetching = false
    items = staticItems
  }

  return (
    <main className="container min-h-[calc(100vh-260px)]">
      { errorFetching && <div>
        <div className="flex my-40 justify-center text-center flex-col">
          <h1 className="text-[60px]">Search Quota Exceeded</h1>
          <div className="max-w-lg mx-auto text-[20px]">Check again tomorrow or click the button below to view a static version of the search results.</div>
          <div className="mt-8 justify-center items-center sm:flex">
            <Link to="/search?s=Julius%20Odai&static=true" className="px-10 py-3.5 w-full bg-blue-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                Static Search Results
            </Link>
          </div>
        </div>
      </div> }

      { !errorFetching && items && <>
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
