<template lang="html">
  <div>
    <div v-show="!gradeFormInfo.isShowDelTpl">
      <div class="form-group">
        <label for="">年级名称</label>
        <input class="form-control" v-model="gradeFormInfo.grade_title" type="text" placeholder="年级名称">
        <layer-tip v-show="isShowLayTip" tip-content="请填写年级价格"></layer-tip>
      </div>
      <div class="form-group">
        <label for="">年级课程价格</label>
        <input class="form-control" v-model="gradeFormInfo.grade_price" type="text" placeholder="年级课程价格">
      </div>
      <div class="form-group">
        <label for="">年级课程总数</label>
        <input class="form-control" v-model="gradeFormInfo.grade_sum" type="text" placeholder="年级课程总数">
      </div>
    </div>
    <div v-show="gradeFormInfo.isShowDelTpl">
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
  props: ['gradeFormInfo'],
  methods: {
    checkForm () {
      if (this.gradeFormInfo.grade_title === '') {
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
