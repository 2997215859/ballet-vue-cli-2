import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
let post = (url, data, options) => {
  return _ajaxPost({
    url: url,
    data: data,
    options: options
  })
}
let _ajaxPost = (options) => {
  console.log('options', options)
  return Vue.http.post(options.url, options.data || {}).then(
    (res) => {
      console.log(res.json())
      return res.json()
    }
  ).then(
    res => {
      if (res.ret !== '1') {
        return Promise.reject(res)
      }
      return Promise.resolve(res)
    }
  ).catch((res) => {
    window.alert('请求服务器失败，请重试')
    return Promise.reject(res)
  })
}
export default { post: post }
