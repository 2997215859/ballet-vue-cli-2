export default (router) => router.map({
  '/index/part1': {
    auth: true,
    name: 'part1',
    component: require('./components/index/Part1')
  },
  '/index/part2': {
    auth: true,
    name: 'part2',
    component: require('./components/index/Part2')
  },
  '/login': {
    name: 'login',
    component: require('./components/Login')
  },
  '/': {
    name: 'root',
    component: require('./components/Login')
  }
})
