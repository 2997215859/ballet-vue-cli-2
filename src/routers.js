export default (router) => router.map({
  '/login': {
    name: 'login',
    component: require('./components/Login')
  },
  '/index': {
    auth: true,
    name: 'index',
    component: require('./components/index/Index'),
    subRoutes: {
      '/gradeSet': {
        name: 'gradeSet',
        component: require('./components/index/grade/Index.vue')
      },
      '/classSet': {
        name: 'classSet',
        component: require('./components/index/class/Index.vue')
      },
      '/memCenter': {
        name: 'memCenter',
        component: require('./components/index/mem/Index.vue')
      }
    }
  },
  '/': {
    name: 'root',
    component: require('./components/Login')
  }
})
