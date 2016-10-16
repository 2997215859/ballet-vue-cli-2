// action
export const increment = function ({dispatch}) {
  dispatch('INCREMENT')
}
export const decrement = function ({dispatch}) {
  dispatch('DECREMENT')
}
export const asideIsOpenFun = function ({dispatch}, isOpen, asideName) {
  dispatch('ASIDEISOPEN', isOpen, asideName)
}
export const navIsFoldFun = function ({dispatch}, isFold) {
  dispatch('NAVISFOLD', isFold)
}
