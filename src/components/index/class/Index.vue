<template lang="html">
  <div>
    <button class="btn btn-default btn-primary my-btn" type="button" name="button" @click="showModal('addClass', emptyformInfo, singlePageData.grade_list)">添加班级</button>
    <table class="my-table">
      <tr>
        <th>班级名称</th>
        <th>老师姓名</th>
        <th>周几上课</th>
        <th>上课时间</th>
        <th>下课时间</th>
        <th>操作</th>
        <th>考勤详情</th>
      </tr>
      <tr v-for="item in singlePageData.class_list">
        <td>{{ item.class_title }}</td>
        <td>{{ item.teacher_name }}</td>
        <td>{{ item.sweek }}</td>
        <td>{{ item.stime }}</td>
        <td>{{ item.etime }}</td>
        <td class="setTd">
          <span @click="showModal('changeClass', item, singlePageData.grade_list)">修改</span>
          <span @click="showModal('del', item, singlePageData.grade_list)">删除</span>
        </td>
        <td class="setTd">
          <span @click="asideIsOpenFun(true, 'attendanceDetail')">查看</span>
        </td>
      </tr>
    </table>
    <my-modal v-ref:my-modal :modal-info="modalInfo">
      <my-form v-ref:my-form slot="classForm" :form-info="formInfo"></my-form>
    </my-modal>
  </div>
</template>

<script>
import myModal from '../Modal.vue'
import myForm from './FormTpl.vue'
import ajax from '../../../assets/js/ajax.js'
import { asideIsOpenFun } from '../../../vuex/actions.js'
export default {
  data () {
    return {
      singlePageData: [],
      modalInfo: {
        type: '',
        name: 'classForm',
        title: '班级设置'
      },
      formInfo: {
        basicInfo: {},
        extraData: {}
      },
      emptyformInfo: {
        basicInfo: {
          class_title: '',
          teacher_name: '',
          grade_id: '',
          sweek: '',
          stime: '',
          etime: ''
        },
        extraData: {}
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
    showModal (type, item, extraData) {
      this.$refs.myModal.showModal()
      this.modalInfo.type = type
      this.formInfo = {
        basicInfo: this.deepCopy(item),
        extraData: extraData
      }
      console.log('formInfo', this.formInfo)
      if (type === 'del') {
        this.formInfo.isShowDelTpl = true
      } else {
        this.formInfo.isShowDelTpl = false
      }
    },
    getList () {
      ajax.post(
        '/ballet/api/oa/select_list/', {}, {}
      ).then(
        (res) => {
          console.log('success', res)
          this.singlePageData = res.data
        },
        (res) => {
          console.log('error', res)
          window.alert(res.err_msg)
        }
      )
    },
    operate (url, data, suc, fail) {
      ajax.post(url, data, {}).then(suc, fail)
    }
  },
  ready () {
    this.getList()
  },
  events: {
    'operations' () {
      console.log('type = ', this.modalInfo.type)
      let that = this
      if (!this.$refs.myForm.checkForm()) { return }
      console.log('验证通过')
      this.$refs.myModal.closeModal()
      switch (this.modalInfo.type) {
        case 'addClass':
          this.operate(
            '/ballet/api/oa/class_add',
            {
              title: this.$refs.myForm.formInfo.basicInfo.class_title,
              teacher_name: this.$refs.myForm.formInfo.basicInfo.teacher_name,
              grade_id: this.$refs.myForm.formInfo.basicInfo.grade_id,
              sweek: this.$refs.myForm.formInfo.basicInfo.sweek,
              stime: this.$refs.myForm.formInfo.basicInfo.stime,
              etime: this.$refs.myForm.formInfo.basicInfo.etime
            },
            function (res) {
              that.getList()
            },
            function (res) {
              window.alert(res.err_msg)
            }
          )
          break
        case 'changeClass':
          this.operate(
            '/ballet/api/oa/class_up/',
            {
              class_id: this.$refs.myForm.formInfo.basicInfo.class_id,
              title: this.$refs.myForm.formInfo.basicInfo.class_title,
              teacher_name: this.$refs.myForm.formInfo.basicInfo.teacher_name,
              grade_id: this.$refs.myForm.formInfo.basicInfo.grade_id,
              sweek: this.$refs.myForm.formInfo.basicInfo.sweek,
              stime: this.$refs.myForm.formInfo.basicInfo.stime,
              etime: this.$refs.myForm.formInfo.basicInfo.etime
            },
            function (res) {
              that.getList()
            },
            function (res) {
              window.alert(res.err_msg)
            }
          )
          break
        case 'delGrade':
          this.operate(
            '/ballet/api/oa/class_up/',
            {
              class_id: this.$refs.gradeForm.gradeFormInfo.class_id,
              idel: 1
            },
            function (res) {
              that.getList()
            },
            function (res) {
              window.alert(res.err_msg)
            }
          )
          break
      }
    }
  },
  components: {
    myForm,
    myModal
  },
  vuex: {
    actions: {
      asideIsOpenFun
    }
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
