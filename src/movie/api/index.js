import axios from 'axios'
const server = `http://localhost:8000`
export const strokeCheck = req => axios.get(`${server}/movie/theater_tickets/stroke`, req)