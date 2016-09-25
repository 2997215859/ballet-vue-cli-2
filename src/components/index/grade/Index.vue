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
          <span @click="changeGrade(item.grade_id, item.grade_title, item.grade_price, item.grade_sum)">修改</span>
          <span @click="delGrade(item.grade_id)">删除</span>
        </td>
      </tr>
    </table>
    <Grademodal v-ref:modal><Grademodal>
  </div>
</template>
<script>
import Grademodal from './Modal.vue'
import ajax from '../../../assets/js/ajax.js'
export default {
  data () {
    return {
      singlePageData: []
    }
  },
  methods: {
    addGrade () {
      console.log(this)
      this.$refs.modal.showModal()
    },
    getGradeList () {
      ajax.post(
        '/ballet/api/oa/select_list/', {}, {}
      ).then(
        (res) => {
          console.log('success', res)
          this.singlePageData = res.data.grade_list
        },
        (res) => {
          console.log('error', res)
          window.alert(res.err_msg)
        }
      )
    }
  },
  ready () {
    this.getGradeList()
  },
  components: {
    Grademodal
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
