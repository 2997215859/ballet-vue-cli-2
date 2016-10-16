<template lang="html">
  <div class="my-container animate" id="container" :style="{ left: leftDis + 'px' }">
    <div class="my-aside" id="sidebar">
      <div class="menu">
        <h2><span>吴华芭蕾舞</span></h2>
        <hr class="line-mode">
        <dl class="menu-list">
          <dd><a v-link="{ path : '/index/gradeSet', activeClass: 'active' }">年级设置</a></dd>
          <dd :class="isSysTitleActive ? 'active': ''">
            <a @click="isSysTitleActive = !isSysTitleActive">系统设置</a>
            <ul class="menu-sub" v-show="isSysTitleActive">
              <li>
                <a v-link="{ path: '/index/sysSet/gradeSet', activeClass:'active'}">
                  <i class="ico-dot"></i>
                  <span>年级设置</span>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/index/sysSet/classSet', activeClass:'active'}">
                  <i class="ico-dot"></i>
                  <span>班级设置</span>
                </a>
              </li>
            </ul>
          </dd>
          <dd :class="isShowMemTitlePath? 'active': ''">
            <a @click="isShowMemTitlePath = !isShowMemTitlePath">会员设置</a>
            <ul class="menu-sub" v-show="isShowMemTitlePath">
              <li>
                <a v-link="{ path: '/index/memMan/memCenter', activeClass:'active'}">
                  <i class="ico-dot"></i>
                  <span>会员中心</span>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <a href="javascript:void(0)" @click="toggleSidebar" class="btn-fold-menu" :class="[ isFold ? 'retract' : '']" title="fold"></a>
    </div>
    <div class="main" id="appArea">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { navIsFoldFun } from '../../vuex/actions.js'
export default {
  data () {
    return {
      leftDis: 0,
      isFold: false,
      modalIsOpen: false,
      isSysTitleActive: false,
      isShowMemTitlePath: false
    }
  },
  methods: {
    toggleSidebar: function () {
      if (this.leftDis === 0) {
        this.leftDis = -200
        this.isFold = true
      } else {
        this.leftDis = 0
        this.isFold = false
      }
      this.navIsFoldFun(this.isFold)
    }
  },
  route: {
    data: function (transition) {
      transition.next({
        isSysTitleActive: (function () {
          if (transition.to.path.slice(0, 13) === '/index/sysSet') {
            return true
          }
          return false
        })(),
        isShowMemTitlePath: (function () {
          console.log(transition.to.path.slice(0, 13))
          if (transition.to.path.slice(0, 13) === '/index/memMan') {
            return true
          }
          return false
        })()
      })
    }
  },
  vuex: {
    actions: {
      navIsFoldFun
    }
  }
}
</script>

<style lang="css" scoped>
.my-container{
  position: absolute;
  top:0px;
  right: 0;
  bottom:0;
  transition: left .3s;
  background: #fff;
}
.my-container.animate{
  transition: left 0.3s;
}
.my-aside{
  position: relative;
  width: 199px;
  background-color: #f0f6f6;
  border-right: 1px solid #cedfea;
  display: inline-block;
  height: 100%;
  vertical-align: top;
}
.menu{
  position: relative;
  height: 100%;
}
.my-aside .menu h2{
  font-size: 22px;
  font-weight: 400;
  line-height: 62px;
  display: block;
  padding: 0 20px;
  color: #171d25;
  height: 62px;
}
.line-mode{
  width: 156px;
  height: 0;
  margin: 0 auto 15px;
  border: none;
  border-top:1px solid #cadbe6;
  border-bottom:1px solid #f8fbfb;
}
.menu-list{
  font-size: 14px;
  line-height: 35px;
  overflow: auto;
  position: absolute;
  width: 100%;
  top:75px;
  bottom:0;
  padding-top:15px;
}
.menu-list dd{
  display: block;
  width: 100%;
}
.menu-list dd a{
  display: block;
  font-size:14px;
  height: 37px;
  line-height: 37px;
  padding-left:25px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
}
.menu-list dd a:hover{
  color: #2277da;
  background-color: #d5e2ef;
  cursor: pointer;
}
.menu-list dd a.active{
  color: #2277da;
  background-color: #d5e2ef;
}
.menu-list dd.active{
  color: #2277da;
  background-color: #d5e2ef;
}
.main{
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 200px;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
}
.my-aside .btn-fold-menu{
  position:absolute;
  top:21px;
  right:-1px;
  overflow: hidden;
  width:16px;
  height:36px;
  border:1px solid #c7e0ef;
  border-right:none;
  border-radius:3px 0 0 3px;
  background: url(../../assets/images/top-menu.png) -72px -40px no-repeat #f7fdfd;
  z-index: 100;
}
.btn-fold-menu.retract{
  right: -17px;
  border: 1px solid #c7e0ef;
  border-left: none;
  background: url(../../assets/images/top-menu.png) -87px -40px no-repeat #f0f6f6;
}
h4{
  font-size: 18px;
}
.menu-list .menu-sub{
  display: block;
}
.menu-list dd ul.menu-sub li a i.ico-dot{
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 0 14px 0 2px;
  vertical-align: middle;
  border-radius: 5px;
  background: #b2becd;
}
.menu-list dd.active ul.menu-sub li a.active i.ico-dot{
  display: inline-block;
  width: 7px;
  height: 7px;
  margin: 0 14px 0 2px;
  background-color: inherit;
  background: url(../../assets/images/top-menu.png);
  background-position: 0 -77px;
  /*background: #b2becd;*/
}
</style>
