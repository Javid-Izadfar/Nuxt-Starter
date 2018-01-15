export const queryCreator = (data, options = {}) => {
  // return data;
  let array = !options.hasDefault ? '?paging_model=cursor' : ''
  let i = 0
  for (let k in data) {
    if (data[k] && typeof data[k] !== 'object' && k !== options.filter) {
      options.hasDefault && i === 0 ? array += '?' + k + '=' + data[k] : array += '&' + k + '=' + data[k]
      i++
    }
  }
  return array
}
