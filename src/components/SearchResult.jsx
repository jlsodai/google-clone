import React from 'react'

const SearchResult = ({ item }) => {
  const splitLink = item.formattedUrl.split('//')
  return (
    <div className="mb-10">
      <a href={item.formattedUrl}>
        {splitLink[0] + '//' + splitLink[1].replaceAll('/', ' › ')}
        <h3 className="text-blue-800 text-xl py-1">{item.title}</h3>
      </a>
      <p>{item.snippet}</p>
    </div>
  )
}

export default SearchResult
