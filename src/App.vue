<template lang="html">
  <div>
    <div class="">
      <router-view><router-view>
    </div>
    <loading v-if="showLoading"></loading>
    <my-aside>
      <p slot="">还未有赋值</p>
      <attendance-detail slot='attendanceDetail'></attendance-detail>
    </my-aside>
  </div>
</template>
<script>
import myAside from './components/public/Aside.vue'
import attendanceDetail from './components/index/class/AttendanceDetail.vue'
import loading from './components/Loading.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './vuex/store.js'
Vue.use(VueResource)
export default {
  store,
  replace: false,
  data () {
    return {
      showCustomModal: false,
      showLoading: false
    }
  },
  ready () {
    var that = this
    Vue.http.interceptors.push(function (request, next) {
      that.showLoading = true
      next((response) => {
        that.showLoading = false
        return response
      })
    })
  },
  components: {
    loading,
    myAside,
    attendanceDetail
  }
}

</script>
<style lang="css">
</style>
