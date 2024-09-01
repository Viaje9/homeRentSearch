import axios from 'axios'

const baseUrl = 'https://us-central1-home-rent-backend.cloudfunctions.net'

export function getRentData(urlParams) {
  return axios.get(`${baseUrl}/getRentListApi`, {
    params: { urlParams }
  })
}

export function getPosition(id) {
  return axios.get(`${baseUrl}/getPosition`, {
    params: { id }
  })
}
