<template lang="html">
  <div id="particles-js">
    <div class="loginDiv">
      <img src="../assets/images/ballet.png" alt="" />
      <span>吴华芭蕾</span>
      <input type="text" v-model="username" class="username" name="username" placeholder="用户名">
      <input type="password" v-model="password" class="password" name="password" placeholder="密　码">
      <div id="submitInBt" class="submitInBt">登陆</div>
    </div>
  </div>
</template>
<script>
import particlesJS from '../libs/particles.js'
import $ from 'jquery'
particlesJS.load('particles-js', 'static/libs/particles.json', function () {
  console.log('callback - particles.js config loaded')
})
var num = parseInt(Math.random() * 4 + 1)
export default {
  ready () {
    $('#particles-js').css('background-image', 'url(static/images/balletBg' + num + '.jpg)')
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
</style>
