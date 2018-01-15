import axios from '~/plugins/axios'
// import Cache from '~utils/cache.js'
// let cache = new Cache({prefix:'test_client_'})

async function api ({path, header, method = 'get', cacheKey, body = {}}) {
  try {
    // let _cache
    // if(cacheKey) {
    //   try {
    //     if(cacheKey) _cache = await cache.get({key:cacheKey})
    //     if(_cache) return JSON.parse(_cache.toString('utf8'))
    //   } catch(e) {
    //     if(e) console.error(e)
    //     let {data} = await axios[method](path, body)
    //       try {
    //         await cache.set({key: cacheKey, value: data})
    //         return data
    //       } catch (e) {
    //         console.error(e)
    //         return data
    //       }
    //     }
    // }
    let {data} = await axios[method](path, body)
    return data
  } catch (e) {
    let response = e.response
    console.log('msg: ' + e.message + ' | api: ' + response.config.url + ' | status: ' + response.status)
    return Promise.reject(e)
  }
}

export default api
