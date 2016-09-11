<template lang="html">
  <div id="particles-js">
    <div class="loginDiv">
      <img src="../assets/images/ballet.png" alt="" />
      <span>吴华芭蕾</span>
      <input type="text" v-model="username" initial="off" class="username" name="username" placeholder="用户名">
      <input type="password" v-model="password" initial="off" class="password" name="password" placeholder="密　码">
      <p class="errMsg" v-if="errShow">请输入用户名和密码</p>
      <div id="submitInBt" class="submitInBt" @click="login">登陆</div>
    </div>
    <div class="">
      上周工作：
      1、招生展中秋页面的编写
      2、招生展推荐页面
      3、芭蕾舞bug修改

      这周写中秋的模板的时候学习了css里的动画是怎么实现的。看完了vuex的文档，写了几个demo，挺有意思。最近在倒腾vue-cli，坑很多，刚刚还遇到一个，平时jQ的ajax在发送前都会对请求数据序列化，用了vue-resource结果是直接发的ajax对象，眼睛太瞎最后才在请求里看到不一样。还有第三方插件的导入也是各种小坑，不过模块化太诱人，学习成本总是有的。每天看道算法题，活动活动脑子。刚开始看《世说新语》，其实看的是《世说新语笺梳》，读起来很吃力，魏晋的文言加上后面的笺和梳，脑细胞已死完。

      下周工作：
      1、继续修改ballet页面
    </div>
  </div>
</template>

<script>
import particlesJS from '../libs/particles.js'
import $ from 'jquery'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
particlesJS.load('particles-js', 'static/libs/particles.json', function () {
  console.log('callback - particles.js config loaded')
})
var num = parseInt(Math.random() * 4 + 1)
export default {
  ready () {
    $('#particles-js').css('background-image', 'url(static/images/balletBg' + num + '.jpg)')
  },
  data () {
    return {
      username: '',
      password: '',
      errShow: false
    }
  },
  methods: {
    login () {
      console.log('username', this.username)
      console.log('password', this.password)
      if (this.username === '' || this.password === '') {
        this.errShow = true
      } else {
        this.errShow = false
        Vue.$http.post(
          'http://crm.yunyuer.com/ballet/api/oa/login/',
          {
            username: this.usernamee,
            password: this.password
          }
        ).then((response) => {
          console.log(response)
        })
      }
    }
  }
}
</script>

<style lang="css">
html,body{
	width:100%;
	height:100%;
}
html{
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body{
  font:normal 75% Arial, Helvetica, sans-serif;
}
canvas{
  display:block;
  vertical-align:bottom;
}
/* ---- particles.js container ---- */
#particles-js{
  width: 100%;
  height: 100%;
  /*background-color: #b61924;*/
  /*background-image:url(../assets/images/balletBg4.jpg);*/
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.loginDiv{
  /*margin-top:30px;*/
  position:absolute;
  top:20%;
  left:50%;
  margin-left:-190px;
  width:300px;
  color:#fff;
  text-align:center;
  background-color:rgba(50,50,50,0.6);
  padding:20px 40px 60px;
}
.loginDiv span{
  display:block;
  font-size:15px;
  font-weight:bold;
  margin-top:16px;
  margin-bottom:20px;
}
.loginDiv input{
  width:300px;
  display:block;
  background-color:rgba(255, 255, 255, 0.95);
  border:0 none;
  outline:0 none;
  font-size:12px;
  padding:12px;
  box-sizing:border-box;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
}
.loginDiv input.username{
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  border-bottom:1px solid rgb(227,227,227);
}
.loginDiv input.password{
  border-bottom-left-radius:2px;
  border-bottom-right-radius:2px;
}
.submitInBt{
  color:#fff;
  width:100%;
  height:38px;
  line-height:38px;
  border-radius:2px;
  text-align:center;
  background-color:rgba(70,175,95,0.9);
  cursor:pointer;
  margin-top:20px;
}
.submitInBt:hover{
  background-color:rgb(90,195,115);
}
.errMsg{
  color:#ec3627;
  margin-top:10px;
}
</style>
