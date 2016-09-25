<template lang="html">
  <div>
    <div v-show="!gradeFormInfo.isShowDelTpl">
      <div class="form-group">
        <label for="">年级名称</label>
        <input class="form-control" v-model="gradeFormInfo.grade_title" type="text" placeholder="年级名称">
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
export default {
  props: ['gradeFormInfo']
}
</script>

<style lang="css">
.del{
  font-size: 24px;
  font-weight: bold;
}
</style>
