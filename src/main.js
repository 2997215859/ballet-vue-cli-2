import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './routers'
/* eslint-disable no-new */
window.jQuery = window.$ = require('jquery/dist/jquery')
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
const router = new VueRouter()
configRouter(router)
router.beforeEach((transition) => {
  console.log('from', transition.from.path, 'to', transition.to.path)
  if (transition.to.auth) {
    console.log('需要登陆')
    if (window.localStorage.username && window.localStorage.password) {
      console.log('验证本地缓存')
      Vue.http.post(
        '/ballet/api/oa/login/',
        {
          username: window.localStorage.username,
          password: window.localStorage.password
        }
      ).then((response) => {
        return response.json()
      }).then((res) => {
        if (res.ret === '1') {
          transition.next()
        }
      })
      // transition.next()
      console.log(transition.to)
    } else {
      const redirect = encodeURIComponent(transition.to.path)
      console.log('没有本地缓存，直接跳转login')
      console.log('redirect', redirect)
      transition.redirect('/login?redirect=' + redirect)
    }
  } else {
    console.log('不需要登陆')
    transition.next()
  }
})
router.redirect({
  '/': '/login'
})
router.start(App, 'body')
