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

1、潜客中心提醒工作记录了完成
2、升班功能完成
3、修改一些页面上的小问题
4、生日查询完成
5、修改登录页

下周开始调整目录，之前的模块太多没有结构，调整之后要比之前应该好一些，由于涉及到比较多的变动，页面这边需要大概一天的时间调整。然后还有导出、使用帮助等需要添加。vue2.0 rc了8个版本后发布了，听道友说变动还蛮大的，而且涉及到了vue-router之类的库，发现好多人都开始跟了，感觉心有余而力不足，精力有限，先把vue1.0的事情完成，再想想怎么去升级。


##本周工作
####（快艺点）
1、一级目录调整成二级目录，代码整合（boom）
2、会员导出和潜客导出
3、考勤详情和备注线上查看，备注添加（突然想起还有个样式没改）
4、升班、导出和排课的整合

##感想
这周出现放弃一直以来在用vue重写的想法，因为一方面快艺点已经成型，工作上已经没有重写的必要，另外一方面框架已经基本搭好，接下来的重复性工作较多，精力有限（白天工作or上课，晚上猫宿舍重写这样实在太累，但是不这么搞怎么能提升技术），希望去看看其他方面的知识（还有很多很多想学的东西，狗带...）。
但是出现的几个问题让我意识到还有几个比较大的挑战还未完成，比如modal框作为一个出现频率较高，并且内容变化非常大的组件，如何去实现共用。因为侧滑栏这个组件（同样这么一个业务属性的组件）的编写中，本来以为父组件负责展示和滑出，子组件内容用slot分发，通过绑定动态属性去切换频繁改变的子组件，用vuex去管理全局的状态性、公共性变量即可，但是出现了父组件需要重新渲染、组件切换和之前写的过渡冲突等等一系列意料之外（当然是情理之中，摔，(╯‵□′)╯︵┴─┴）的事情。在侧滑栏这个组件中现在应该已经解决，接下来用model去验证。
这让我体味到知道和掌握往往并不是一回事。还有细想一下接下来的假期设置、课表我该怎么用vue去实现。这几个问题值得我继续去深究并去实践。地铁上不困的话还是会刷知乎和刷《世说新语》段子合集，看到魏晋风骨之士崇尚清谈、忠孝、风骨，莫名想起某某说过“国不幸诗幸”，大概可以类比一下吧。
