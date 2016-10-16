<template lang="html">
  <div class="my-aside1" v-if="asideIsOpen" transition="expand" :class="{'active': asideIsOpen, 'active1': navIsFold}">
    <span title="关闭" id="asideCloseBtn" class="glyphicon glyphicon-remove-sign" @click="closeAndFreshen"></span>
    <slot :name='asideName'></slot>
  </div>
</template>

<script scoped>
import { getAsideIsOpen, getNavIsFold, getAsideName } from '../../vuex/getters.js'
import { asideIsOpenFun } from '../../vuex/actions.js'
export default {
  data () {
    return {
      asideIsOpen2: false
    }
  },
  methods: {
    closeAndFreshen () {
      this.asideIsOpenFun(false, '')
      // 然后再刷新，这一步还没做
    }
  },
  vuex: {
    getters: {
      // 注意在这里你需要'getCount'函数本身而不是它的执行结果'getCount()'
      // 监听一下 asideName
      asideName: getAsideName,
      asideIsOpen: getAsideIsOpen,
      navIsFold: getNavIsFold
    },
    actions: {
      asideIsOpenFun
    }
  }
}
</script>

<style lang="css" scoped>
.expand-transition{
  transition: left .3s;
  left: 200px;
}
.active1.expand-transition{
  transition: left .3s;
  left: 0px;
}
.expand-enter, .expand-leave{
  left: 100vw
}
/* 对应的enter和leave需要写，不然会报错 */
.active1.expand-enter, .active1.expand-leave{
  left: 100vw
}
.my-aside1{
  height: 100%;
  position: absolute;
  right:0;
  background-color: #f0f6f6;
}
.my-aside1 #asideCloseBtn{
  position: absolute;
  right: -100vw;
  font-size: 25px;
  color: #000;
  cursor: pointer;
  transition: left .3s;
}
.my-aside1.active #asideCloseBtn{
  right: 0;
}
</style>
