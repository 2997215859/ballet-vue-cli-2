<template lang="html">
  <div>
    <button type="button" name="button" @click="modalIsOpen = true">modal</button>
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
    <modal title="Zoom Modal" effect="zoom" :show.sync="modalIsOpen">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">
          <i>Custom</i> <code>Modal</code><b>Title</b>
        </h4>
      </div>
      <div slot="modal-body" class="modal-body">
        <h4>hello world</h4>
      </div>
      <div slot="modal-footer" class="modal-footer">
        <button type="button" name="button" class="btn btn-default" @click="modalIsOpen = false">Exit</button>
        <button type="button" name="button" class="btn btn-success" @click="modalIsOpen = false">Save</button>
      </div>
    </modal>
  </div>
</template>
<script>
import { modal } from 'vue-strap'
export default {
  data () {
    return {
      singlePageData: [],
      modalIsOpen: false
    }
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
  },
  components: {
    modal
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
