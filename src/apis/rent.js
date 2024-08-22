import axios from 'axios'

export function getRentData(urlParams) {
  return axios.get('https://us-central1-home-rent-backend.cloudfunctions.net/getRentListApi', {
    params: { urlParams }
  })
}
