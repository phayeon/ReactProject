import axios from 'axios'
const server = `http://localhost:8000`
export const strokeCheck = req => axios.get(`${server}/movie/theater_tickets/stroke`, req)
export const irisGet = req => axios.get(`${server}/movie/theater_tickets/irisget`, req)
export const irisPost = req => axios.post(`${server}/movie/theater_tickets/irispost`, req)
export const fashionPost = test_num => axios.post(`${server}/movie/theater_tickets/fashion?test_num=${test_num}`, {test_num})
export const fashionGet = test_num => axios.get(`${server}/movie/theater_tickets/fashion?test_num=${test_num}`)