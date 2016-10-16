// 这个getter会返回 count 的值
// 在 ES6 里 你可以写成
// export const getCount = state => state.count
export function getCount (state) {
  return state.count
}
export function getAsideIsOpen (state) {
  return state.asideIsOpen
}
export function getNavIsFold (state) {
  return state.navIsFold
}
export function getAsideName (state) {
  // console.log('getAsideName', state.asideName)
  return state.asideName
}
