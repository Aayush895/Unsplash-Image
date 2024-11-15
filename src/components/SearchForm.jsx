import { useState } from 'react'
import style from './SearchForm.module.css'
import { useFetchPhotos } from '../../ReactQueryHooks'

function SearchForm() {
  const [searchText, setsearchText] = useState('')
  const [queryKey, setqueryKey] = useState('')

  const { isLoading, data, isError } = useFetchPhotos(searchText, queryKey)

  function handleSearchInput(e) {
    setsearchText(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault()
    setqueryKey(searchText)
  }

  console.log(data)

  return (
    <div id={style.searchContainer}>
      <input
        type="text"
        name="search"
        placeholder="Enter something to search..."
        value={searchText}
        onChange={handleSearchInput}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
export default SearchForm
