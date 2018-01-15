import axios from '~/plugins/axios'
async function api ({path, header, method = 'get', cache, body = {}, local}) {
  try {
    let {data} = await axios[method](path, body)
    return data
  } catch (e) {
    let response = e.response
    console.log(response)
    return Promise.reject(e)
  }
}

export default api
