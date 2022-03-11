import React from 'react'
import { Link } from 'react-router-dom';

const SearchFooter = () => {
  return (
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
  )
}

export default SearchFooter
