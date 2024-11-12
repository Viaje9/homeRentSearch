import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

export function getRentData(urlParams) {
  return axios.get(`${baseUrl}/getRentListApi`, {
    params: { urlParams }
  })
}

export function getRentDataV2(urlParams) {
  return axios
    .post(`${baseUrl}/getRentListV2Api`, {
      body: urlParams
    })
    .then(({ data }) => data)
}

export function getPosition(id) {
  return axios.get(`${baseUrl}/getPosition`, {
    params: { id }
  })
}
