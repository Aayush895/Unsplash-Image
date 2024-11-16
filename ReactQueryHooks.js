import { useQuery } from '@tanstack/react-query'
import customFetch from './src/customFetch'

// Here we provide queryKey as another value in the queryKey property of react query. That is because react-query by default caches the result of fetch. So once we have fetched the result it's not going to refetch the result from the same url because the result is already cached. But we want to fetch the data every time the search text is changed. So that's why the queryKey is set to searchText value ie whenever we click on submit the queryKey changes to `searchText` and since the value of queryKey changed, react-query will also re-fetch the result from the url but with separate param and that param is equal to the `searchText` we provided from the input field.
// Behind the scene what is happening is that react-query is always refetching the value from the url. Now if the new data matches the old data then nothing happens, that old data still remains in the cache, but if the new and old data does not match then the old data in the cache is replaced with the new data in the cache.
export function useFetchPhotos(searchTerm, queryKey) {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['image', queryKey],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `/search/photos?query=${searchTerm}`
      )
      return data
    },
    enabled: !!queryKey,
  })

  return { isLoading, data, isError }
}
