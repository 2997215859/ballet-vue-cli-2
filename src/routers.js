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
      '/sysSet/gradeSet': {
        component: require('./components/index/grade/Index.vue')
      },
      '/sysSet/classSet': {
        component: require('./components/index/class/Index.vue')
      },
      '/memMan/memCenter': {
        component: require('./components/index/mem/Index.vue')
      }
    }
  },
  '/': {
    name: 'root',
    component: require('./components/Login')
  }
})
