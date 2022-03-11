import { Link } from "react-router-dom"

const Search = () => {
  return (
    <form className="flex flex-col pt-16 items-center grow space-y-6 text-[14px]">
      <img src="/logo.png" className="w-[272px]" alt="logo" />

      <div className="relative">
        <svg className="absolute w-4 bottom-4 left-4 stroke-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

        <input type="text" className="border py-3 px-12 rounded-full w-[400px] md:w-[600px]" placeholder="Enter your search term here..." autoFocus/>

        <svg className="absolute right-5 w-6 top-3" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
      </div>

      <div className="flex space-x-4">
        <button className="rounded bg-gray-100 px-4 py-2 hover:shadow-md">Google Search</button>
        <Link className="rounded bg-gray-100 px-4 py-2" to="https://www.google.com/doodles">I'm Feeling Lucky</Link>
      </div>
      <p>Google offered in: <span className="text-blue-900 space-x-2">
        <Link to="#">Hausa</Link> <Link to="#">Akan</Link> <Link to="#">Ewe</Link> <Link to="#">Ga</Link>
      </span></p>
    </form>
  )
}

export default Search
