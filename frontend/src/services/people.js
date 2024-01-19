import axios from 'axios'

const baseUrl = '/api/people'

const getAllPeople = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createPerson = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

export default { getAllPeople, createPerson }