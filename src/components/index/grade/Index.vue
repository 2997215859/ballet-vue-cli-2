<template lang="html">
  <div>
    <button class="btn btn-default btn-primary my-btn" type="button" name="button" @click="showModal('addGrade', {grade_title: '', grade_price: '', grade_sum: ''})">添加年级</button>
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
          <span @click="showModal('changeGrade', item)">修改</span>
          <span @click="showModal('delGrade', item)">删除</span>
        </td>
      </tr>
    </table>
    <grade-modal v-ref:grade-modal :modal-info="gradeFormOuterInfo">
      <grade-form v-ref:grade-form slot="gradeForm" :grade-form-info="gradeFormInnerInfo"></grade-form>
    <grade-modal>
  </div>
</template>
<script>
import gradeModal from '../Modal.vue'
import gradeForm from './FormTpl.vue'
import ajax from '../../../assets/js/ajax.js'
export default {
  data () {
    return {
      singlePageData: [],
      gradeFormOuterInfo: {
        type: '', // 每次操作弹出modal之前需要设置一下类型，modal提交的时候方可判断对应链接
        name: 'gradeForm', // 这个名字要和slot里的一样，这是控制modal里是否显示该模板里的slot的
        title: '年级设置'
      },
      gradeFormInnerInfo: {
      }
    }
  },
  methods: {
    deepCopy: function (source) {
      var result = {}
      for (var key in source) {
        result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key]
      }
      return result
    },
    showModal (type, item) {
      this.$refs.gradeModal.showModal()
      this.gradeFormOuterInfo.type = type
      this.gradeFormInnerInfo = this.deepCopy(item)
      if (type === 'delGrade') {
        console.log('delete')
        this.gradeFormInnerInfo.isShowDelTpl = true
      } else {
        this.gradeFormInnerInfo.isShowDelTpl = false
      }
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
    },
    addGrade () {
      // console.log('gradeForm', this.$refs.gradeForm.)
      ajax.post(
        '/ballet/api/oa/grade_add/',
        {
          title: this.$refs.gradeForm.gradeFormInfo.grade_title,
          price: this.$refs.gradeForm.gradeFormInfo.grade_price,
          sum: this.$refs.gradeForm.gradeFormInfo.grade_sum
        },
        {}
      ).then(
        (res) => {
          console.log('success', res)
          this.getGradeList()
        },
        (res) => {
          console.log('error', res)
          window.alert(res.err_msg)
        }
      )
    },
    changeGrade () {
      console.log('type = ', this.gradeFormOuterInfo.type)
      ajax.post(
        '/ballet/api/oa/grade_up/',
        {
          grade_id: this.$refs.gradeForm.gradeFormInfo.grade_id,
          title: this.$refs.gradeForm.gradeFormInfo.grade_title,
          price: this.$refs.gradeForm.gradeFormInfo.grade_price,
          sum: this.$refs.gradeForm.gradeFormInfo.grade_sum
        },
        {}
      ).then(
        (res) => {
          console.log('success', res)
          this.getGradeList()
        },
        (res) => {
          console.log('error', res)
          window.alert(res.err_msg)
        }
      )
    },
    delGrade () {
      console.log('type = ', this.gradeFormOuterInfo.type)
      ajax.post(
        '/ballet/api/oa/grade_up/',
        {
          grade_id: this.$refs.gradeForm.gradeFormInfo.grade_id,
          idel: 1
        },
        {}
      ).then(
        (res) => {
          console.log('success', res)
          this.getGradeList()
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
  events: {
    'operations' () {
      console.log(this.gradeFormOuterInfo.type)
      // 这个事件的名字是从该组件传到modal组件里去的，应该和slot的名字一样
      switch (this.gradeFormOuterInfo.type) {
        case 'addGrade':
          this.addGrade()
          break
        case 'changeGrade':
          this.changeGrade()
          break
        case 'delGrade':
          this.delGrade()
      }
    }
  },
  components: {
    gradeModal,
    gradeForm
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
