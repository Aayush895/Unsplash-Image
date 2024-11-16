import { useState } from 'react'
import style from './SearchForm.module.css'
import { useFetchPhotos } from '../../ReactQueryHooks'
import Gallery from './Gallery'

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

  if (isLoading) {
    return (
      <section>
        <h4>Loading...</h4>
      </section>
    )
  }

  if (isError) {
    return (
      <section>
        <h4>There was an error...</h4>
      </section>
    )
  }

  return (
    <>
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
      <div id={style.outergalleryContainer}>
        {data?.results.length < 1 ? (
          <section>
            <h4>No results found...</h4>
          </section>
        ) : (
          <Gallery searchResult={data?.results} />
        )}
      </div>
    </>
  )
}
export default SearchForm
