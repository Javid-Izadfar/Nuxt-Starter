import Vue from 'vue'

export const SetSimpleData = (state, { stateName, result, data }) => {
  Vue.set(state, stateName, result)
}

export const SetArrayData = (state, { stateName, result, data }) => {
  state[stateName][data.index] = result
}
