// import createLogger from 'vuex/logger'
// export default process.env.NODE_ENV !== 'production'?[createLogger()]:[]
import createLogger from 'vuex'
export default process.env.NODE_ENV !== 'production'?[Vuex.createLogger()]:[]
