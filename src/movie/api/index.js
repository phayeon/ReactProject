import axios from 'axios'
const server = `http://localhost:8000`
export const strokeCheck = req => axios.get(`${server}/movie/theater_tickets/stroke`, req)
export const irisGet = req => axios.get(`${server}/movie/theater_tickets/irisget`, req)
export const irisPost = req => axios.post(`${server}/movie/theater_tickets/irispost`, req)
export const fashionPost = post_num => axios.post(`${server}/movie/theater_tickets/fashion?post_num=${post_num}`, {post_num})
export const fashionGet = get_num => axios.get(`${server}/movie/theater_tickets/fashion?get_num=${get_num}`)