import axios from 'axios'

export function getRentData(urlParams) {
  return axios.post(
    'https://script.google.com/macros/s/AKfycbyKWhxljamFvT1O0LiUbNuwLL8ywHylYbUjTPjHMw4TmF45CIA8ol7hOuRofCXIJ1P0/exec',
    urlParams,
    {
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      redirect: 'follow'
    }
  )
}
