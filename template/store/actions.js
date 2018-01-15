import api from 'create_api'
// import * as utils from './utils'
// import {queryCreator} from '~utils/string'

export const getPosts = async ({commit, state}, data) => {
  let posts = await api({path: 'posts/' + data.id})
  commit('SetSimpleData', {stateName: 'post', result: posts, data: data})
  return posts
}
