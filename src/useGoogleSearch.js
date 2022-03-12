import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const useGoogleSearch = (search) => {
  const [items, setItems] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (search) {
      const fetchData = async() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyATX68WMcz1KLIW7tTQde4ipWnPFx8d00M&cx=27fa05010b0454969&q=${encodeURI(search)}`)
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
