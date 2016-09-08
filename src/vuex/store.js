import Vue from 'vue'
import Vuex from 'vuex'
import
Vue.use(Vuex)
const state = {
  // TODO : 放置初始状态
  token: ''
}
const mutations = {
  // TODO : 防止我们状态变更函数
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state, amount) {
    state.count--
  }
}
export default new Vuex.Store({
  state,
  mutations,
  strict:process.env.NODE_ENV !== 'production',
  // 如果不是生成环境则加上vuex自带
  middlewares: process.env.NODE_ENV !== 'production' ? [Vuex.createLogger()] : []
  // 如果不是生成环境则加上vuex自带的中间件，否则用中间件会降低性能
})
