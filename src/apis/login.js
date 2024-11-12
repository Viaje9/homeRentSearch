import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

export function loginUser(credentials) {
  return axios.post(`${baseUrl}/login`, { credentials }).then(({ data }) => data)
}
