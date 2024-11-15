import { useQuery } from '@tanstack/react-query'
import customFetch from './src/customFetch'

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
