export function resultManipulator (result, array) {
  let res = result.data.filter(item => {
    return array.indexOf(item.type) !== -1
  })
  return {data: res}
}
