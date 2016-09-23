 <!-- 备份现在的导航栏 -->
<template lang="html">
  <div class="my-container" id="container">
    <div class="my-aside" id="sidebar">
        <h2>
          吴华芭蕾舞
        </h2>
        <hr class="line-mod">
        <dl class="menu-list">
          <dd><a v-link="{ path : '/index/gradeSet', activeClass: 'active' }">年级设置</a></dd>
          <dd><a v-link="{ path : '/index/classSet', activeClass: 'active'}">班级设置</a></dd>
          <dd><a v-link="{ path : '/index/memCenter', activeClass: 'active'}">会员中心</a></dd>
        </dl>
        <a href="javascript:void(0)" @click="toggleSidebar" class="btn-fold-menu" title="fold"></a>
    </div>
    <div style="position:absolute;top:0;right:0;bottom:0;left:199px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar: function () {
    }
  }
}
</script>

<style lang="css">
.my-container{
  height: 100%;
}
.my-aside{
  position: fixed;
  width: 199px;
  background-color: #f0f6f6;
  border-right:1px solid #cedfae;
  display: inline-block;
  height: 100%;
  vertical-align: top;
}
.my-aside h2{
  font-size: 22px;
  font-weight: 400;
  line-height: 62px;
  color:#171d25;
  padding:0 20px;
  height: 62px;
}
.line-mod{
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
  height: 100%;
  /*position: absolute;*/
  /*top:75px;*/
  /*bottom:0;*/
}
.menu-list dd{
  display: block;
  height: 37px;
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
</style>

// GradeSet备份
<template lang="html">
  <div>
    <button class="btn btn-default btn-primary my-btn" type="button" name="button" @click="addGrade">添加年级</button>
    <table class="my-table">
      <tr>
        <th>年级名称</th>
        <th>年级课程价格</th>
        <th>年级课程总数</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in singlePageData">
        <td>{{ item.grade_title }}</td>
        <td>{{ item.grade_price }}</td>
        <td>{{ item.grade_sum }}</td>
        <td class="setTd">
          <span @click="">修改</span>
          <span @click="">删除</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { modal } from 'vue-strap'
export default {
  data () {
    return {
      singlePageData: []
    }
  },
  components: {
    modal
  },
  methods: {
    addGrade: () => {}
  },
  ready () {
    this.$http.post(
      '/ballet/api/oa/select_list/'
    ).then((response) => {
      console.log(response.ok)
      return response.json()
    }).then((res) => {
      console.log(res)
      if (res.ret === '1') {
        this.singlePageData = res.data.grade_list
      }
    })
  }
}
</script>
<style lang="css" scoped>
.my-btn{
  float:right;
  margin:15px 2.6% 15px 15px;
  color:#fff;
  background-color:#337ab7;
  border-color:#2e6da4;
  padding:6px 12px;
  font-size:14px;
  font-weight:normal;
  line-height:1.42;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action:manipulation;
  user-select:none;
  -webkit-user-select:none;
  background-image: none;
  border:1px solid transparent;
  cursor: pointer;
  border-radius: 4px;
  text-transform: none;
  overflow: visible;
}
.my-btn:hover{
  background-color: rgb(40, 96, 144);
}
</style>
