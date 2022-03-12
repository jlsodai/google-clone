import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const useGoogleSearch = (search) => {
  const [items, setItems] = useState('')
  const navigate = useNavigate()
  const apiKey = process.env.REACT_APP_SEARCH_API_KEY
  const baseUrl = process.env.REACT_APP_SEARCH_BASE_URL
  const searchId = process.env.REACT_APP_SEARCH_ENGINE_ID

  useEffect(() => {
    if (search) {
      const fetchData = async() => {
        fetch(`${baseUrl}?key=${apiKey}&cx=${searchId}&q=${encodeURI(search)}`)
        .then(response => response.json())
        .then(result => {
          setItems(result)
        })
      }
      fetchData()
    } else {
      navigate('/')
    }
  }, [search])

  return { items }
}

export default useGoogleSearch
