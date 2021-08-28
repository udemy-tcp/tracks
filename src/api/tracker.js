import axios from 'axios'

export default axios.create({
  baseURL: 'https://tcp-track-server.herokuapp.com'
})
