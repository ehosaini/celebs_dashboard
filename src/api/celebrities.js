import axios from 'axios'

const CELEBS_INFO_URL = null

export default axios.create({
  baseURL: CELEBS_INFO_URL || 'http://localhost:3002'
})
