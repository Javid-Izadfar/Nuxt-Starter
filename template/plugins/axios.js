import axios from 'axios'
import api from '../config/index'

let url = api.server
let options = {}
// The server-side needs a full url to works
options.baseURL = typeof window === 'undefined' ? url : window['__NUXT__'].state.url
export default axios.create(options)
