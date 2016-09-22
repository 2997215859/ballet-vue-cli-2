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
        component: require('./components/index/GradeSet')
      },
      '/classSet': {
        name: 'classSet',
        component: require('./components/index/ClassSet')
      },
      '/memCenter': {
        name: 'memCenter',
        component: require('./components/index/MemCenter')
      }
    }
  },
  '/': {
    name: 'root',
    component: require('./components/Login')
  }
})
