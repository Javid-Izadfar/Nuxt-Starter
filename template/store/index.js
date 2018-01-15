import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'

// import _api from '../config'

// const isProd = process.env.NODE_ENV === 'production'
// let url = typeof window === 'undefined' ? _api.client : window['__NUXT__'].state.url

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: null
    },
    actions,
    mutations
  })
}

export default createStore
