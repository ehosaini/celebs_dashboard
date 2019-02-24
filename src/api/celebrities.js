import axios from 'axios'
import { CELEBS_INFO_URL } from '../config'
// const CELEBS_INFO_URL = null

export default axios.create({
  baseURL: CELEBS_INFO_URL || 'http://localhost:3002'
})
