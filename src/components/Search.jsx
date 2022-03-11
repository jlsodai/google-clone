import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SearchContext } from '../appContext';
import SearchBar from "./SearchBar";

const Search = () => {
  const { setSearch } = useContext(SearchContext)
  const [searchInput, setSearchIntput] = useState("");
  const navigate = useNavigate();

  const searched = (e) => {
    e.preventDefault()
    setSearch(searchInput)
    navigate('/search?s=' + searchInput)
  }

  return (
    <form className="flex flex-col pt-16 items-center grow space-y-6 text-[14px]">
      <img src="/images/logo.png" className="w-[272px]" alt="logo" />

      <SearchBar onChange={(e) => setSearchIntput(e.target.value)} />

      <div className="flex space-x-4">
        <button className="rounded bg-gray-100 px-4 py-2 hover:shadow-md" onClick={searched}>Google Search</button>
        <Link className="rounded bg-gray-100 px-4 py-2" to="https://www.google.com/doodles">I'm Feeling Lucky</Link>
      </div>
      <p>Google offered in: <span className="text-blue-900 space-x-2">
        <Link to="#">Hausa</Link> <Link to="#">Akan</Link> <Link to="#">Ewe</Link> <Link to="#">Ga</Link>
      </span></p>
    </form>
  )
}

export default Search
