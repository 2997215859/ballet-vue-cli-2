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

      这周写中秋的模板的时候学习了css里的动画是怎么实现的。看完了vuex的文档，写了几个demo，挺有意思。最近在倒腾vue-cli，坑很多，刚刚还遇到一个，平时jQ的ajax在发送前都会对请求数据序列化，用了vue-resource结果是直接发的ajax对象，眼睛太瞎最后才在请求里看到不一样。还有第三方插件的导入也是各种小坑，不过模块化太诱人，学习成本总是有的，看来还不小，细水长流。每天看道算法题，活动活动脑子。第一次知道markdown原来还能画流程图，有意思。刚开始看《世说新语》，其实看的是《世说新语笺梳》，读起来很吃力，魏晋的文言加上后面的笺和梳，脑细胞已死完。

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

芭蕾舞页面
1、班级设置里显示排课列表时间段和添加
2、添加过期会员
3、会员中心增加即将过期会员查询
4、修复路由的大bug
5、潜客增加工作记录完成客户的基本信息和沟通记录显示，尚未完全完成

这周状态很疲惫，提不起干劲，对事情很消极，希望自己以后在工作上能与团队成员积极沟通。芭蕾舞现有框架需要好好整理一下，下周有空参考一下crm的代码情况再做定夺。vue-cli持续踩坑中，框架基本形成脉络，已经开始往里填东西，尝试封装了一些组件来复用，感觉还不错，不过还是花了不少时间调bug上，难点在于vue组件之间既要考虑到组件的复用性又要考虑到组件之间的通信。一些UI组件用的vue-strap。看了文姐分享的element，感概很多昙花一下的组件库作者都不好好长期维护，比如我现在用的vue-strap（黑人问号），element这次基于vue2.0，vue2.0貌似变化还挺大，感慨前端变化太快。本周没有读书。

下周
1、周一上午：完成潜客的工作记录
2、周二上午：完成升班
3、周三~周四：完成日历的工作
