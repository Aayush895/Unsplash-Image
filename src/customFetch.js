import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: { Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}` },
})

export default customFetch