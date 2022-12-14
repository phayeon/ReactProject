import axios from 'axios'
const server = `http://localhost:8000`
export const strokeCheck = req => axios.get(`${server}/movie/theater_tickets/stroke`, req)
export const irisGet = req => axios.get(`${server}/movie/theater_tickets/irisget`, req)
export const irisPost = req => axios.post(`${server}/movie/theater_tickets/irispost`, req)