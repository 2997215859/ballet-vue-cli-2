<template lang="html">
<div style="margin:30px 20px;">
  <div class="alert alert-info alert-dismissible">
    <div>备注：</div>
    <span class="span1" style="background: #00ff00;">常</span><span>：正常出勤</span><span>&nbsp;&nbsp;&nbsp;</span>
    <span class="span2" style="background: #00ccff;">假</span><span>：学员请假</span><span>&nbsp;&nbsp;&nbsp;</span>
    <span class="span3" style="background: #ff0000;">旷</span><span>：学员旷课</span><span>&nbsp;&nbsp;&nbsp;</span>
    <p>右上角红三角表示有备注</p>
  </div>
  <div class="form-group">
    <label class="">季度选择：</label>
    <label class=""><input type="radio" name="quarterSelector" v-model="quarter" value="1">一季度</label>
    <label class=""><input type="radio" name="quarterSelector" v-model="quarter" value="2">二季度</label>
    <label class=""><input type="radio" name="quarterSelector" v-model="quarter" value="3">三季度</label>
    <label class=""><input type="radio" name="quarterSelector" v-model="quarter" value="4">四季度</label>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      quarter: '2'
    }
  },
  watch: {
    'quarter' (newVal, oldVal) {
      console.log('newVal', newVal)
    }
  }
}
</script>

<style lang="css" scoped>
input[type=checkbox], input[type=radio]{
  margin: 0;
}
.alert.alert-info.alert-dismissible{
  margin-top:20px;
  line-height: 30px;
}
.alert.alert-info.alert-dismissible div{
  font-size: 18px;
  font-weight: bold;
}
.alert.alert-info.alert-dismissible .span1, .span2, .span3{
  display: inline-block;
  width:20px;
  height:20px;
  line-height:20px;
  text-align:center;
}
</style>
