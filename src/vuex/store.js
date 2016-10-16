import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  // TODO : 放置初始状态
  token: '',
  asideIsOpen: false,
  navIsFold: false,
  asideName: ''
}
const mutations = {
  // TODO : 防止我们状态变更函数
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state, amount) {
    state.count--
  },
  ASIDEISOPEN (state, asideIsOpen, asideName) {
    // if (asideIsOpen === true) {
    state.asideName = asideName
    console.log('state.asideName', state.asideName)
    // }
    state.asideIsOpen = asideIsOpen
    console.log('asideName', asideName)
  },
  NAVISFOLD (state, navIsFold) {
    state.navIsFold = navIsFold
  }
}
export default new Vuex.Store({
  state,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
  // 如果不是生产环境则严格模式
  middlewares: process.env.NODE_ENV !== 'production' ? [Vuex.createLogger] : []
  // 如果不是生产环境则加上vuex自带的中间件，否则用中间件会降低性能
})
