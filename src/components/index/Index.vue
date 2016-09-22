<template lang="html">
  <div class="my-container animate" id="container" :style="{ left: leftDis + 'px' }">
    <div class="aside" id="sidebar">
      <div class="menu">
        <h2><span>吴华芭蕾舞</span></h2>
        <hr class="line-mode">
        <dl class="menu-list">
          <dd><a v-link="{ path : '/index/gradeSet', activeClass: 'active' }">年级设置</a></dd>
          <dd><a v-link="{ path : '/index/classSet', activeClass: 'active'}">班级设置</a></dd>
          <dd><a v-link="{ path : '/index/memCenter', activeClass: 'active'}">会员中心</a></dd>
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
export default {
  data () {
    return {
      leftDis: 0,
      isFold: false
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
    }
  }
}
</script>

<style lang="css">
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
.aside{
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
.aside .menu h2{
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
.aside .btn-fold-menu{
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
</style>
