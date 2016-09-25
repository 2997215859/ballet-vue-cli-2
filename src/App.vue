<template lang="html">
  <div>
    <div class="">
      <router-view><router-view>
    </div>
    <loading v-if="showLoading"></loading>
  </div>
</template>
<script>
import loading from './components/Loading.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default {
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
    loading
  }
}

</script>
<style lang="css">
</style>
