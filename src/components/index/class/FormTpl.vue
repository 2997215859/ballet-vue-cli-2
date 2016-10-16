<template lang="html">
  <div>
    <div v-show="!formInfo.isShowDelTpl">
      <div class="form-group">
        <label for="">班级名称</label>
        <input class="form-control" v-model="formInfo.basicInfo.class_title" type="text" placeholder="班级名称">
        <layer-tip v-show="isShowLayTip" tip-content="请填写班级名称"></layer-tip>
      </div>
      <div class="form-group">
        <label for="">老师姓名</label>
        <input class="form-control" v-model="formInfo.basicInfo.teacher_name" type="text" placeholder="请填写老师姓名">
      </div>
      <div class="form-group">
        <label for="">所属年级</label>
        <select class="form-control" v-model="formInfo.basicInfo.grade_id">
          <option v-for="item in formInfo.extraData" :value="item.grade_id">{{ item.grade_title }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">周几上课</label>
        <select class="form-control" v-model="formInfo.basicInfo.sweek">
          <option value="1">周一</option>
          <option value="0">周二</option>
          <option value="2">周三</option>
          <option value="3">周四</option>
          <option value="4">周五</option>
          <option value="5">周六</option>
          <option value="6">周七</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">上课时间</label>
        <input class="form-control" v-model="formInfo.basicInfo.stime" type="text" placeholder="点击填写上课时间">
      </div>
      <div class="form-group">
        <label for="">下课时间</label>
        <input class="form-control" v-model="formInfo.basicInfo.etime" type="text" placeholder="点击填写下课时间">
      </div>
    </div>
    <div v-show="formInfo.isShowDelTpl">
      <div for="" class="del">确认要删除么？</div>
    </div>
  </div>
</template>

<script>
import layerTip from '../Layer.vue'
export default {
  data () {
    return {
      isShowLayTip: false
    }
  },
  props: ['formInfo'],
  methods: {
    checkForm () {
      if (this.formInfo.item.class_title === '') {
        this.isShowLayTip = true
        setTimeout(function () {
          this.isShowLayTip = false
        }, 4000)
        return false
      }
      return true
    }
  },
  components: {
    'layerTip': layerTip
  }
}
</script>

<style lang="css">
.form-group{
  position: relative;
}
.del{
  font-size: 24px;
  font-weight: bold;
}
</style>
