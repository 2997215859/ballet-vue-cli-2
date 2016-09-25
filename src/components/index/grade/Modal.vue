<template lang="html">
  <modal title="Zoom Modal" effect="zoom" :show.sync="modalIsOpen">
    <div slot="modal-header" class="modal-header">
      <h4 class="modal-title">
        <code>填写年级信息</code>
      </h4>
    </div>
    <div slot="modal-body" class="modal-body">
      <div class="form-group">
        <label for="">年级名称</label>
        <input class="form-control" type="text" v-model="gradeName" placeholder="年级名称">
      </div>
      <div class="form-group">
        <label for="">年级课程价格</label>
        <input class="form-control" type="text" v-model="gradePrice" placeholder="年级课程价格">
      </div>
      <div class="form-group">
        <label for="">年级课程总数</label>
        <input class="form-control" type="text" v-model="gradeSum" placeholder="年级课程总数">
      </div>
    </div>
    <div slot="modal-footer" class="modal-footer">
      <button type="button" name="button" class="btn btn-default" @click="modalIsOpen = false">Exit</button>
      <button type="button" name="button" class="btn btn-success" @click="closeModal">Save</button>
    </div>
  </modal>
</template>
<script>
import { modal } from 'vue-strap'
import ajax from '../../../assets/js/ajax.js'
export default {
  data () {
    return {
      modalIsOpen: false,
      gradeName: '',
      gradePrice: '',
      gradeSum: ''
    }
  },
  components: {
    modal
  },
  methods: {
    showModal () {
      this.modalIsOpen = true
    },
    closeModal () {
      ajax.post(
        '/ballet/api/oa/grade_add/',
        {
          title: this.gradeName,
          price: this.gradePrice,
          sum: this.gradeSum
        },
        {}
      ).then(
        (res) => {
          console.log('success', res)
          this.modalIsOpen = false
          console.log(this.$parent)
          this.$parent[0].getGradeList()
        },
        (res) => {
          console.log('error', res)
          window.alert(res.err_msg)
        }
      )
    }
  }
}
</script>

<style lang="css">
h4{
  font-size: 18px;
}
</style>
