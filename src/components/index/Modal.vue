<template lang="html">
  <modal title="Zoom Modal" effect="zoom" :show.sync="modalIsOpen">
    <div slot="modal-header" class="modal-header">
      <h4 class="modal-title">
        <code>{{ modalInfo.title}}</code>
      </h4>
    </div>
    <div slot="modal-body" class="modal-body">
      <slot :name="modalInfo.name"></slot>
    </div>
    <div slot="modal-footer" class="modal-footer">
      <button type="button" name="button" class="btn btn-default" @click="closeModal">关闭</button>
      <button type="button" name="button" class="btn btn-success" @click="submitInfo">提交</button>
    </div>
  </modal>
</template>
<script>
import { modal } from 'vue-strap'
export default {
  data () {
    return {
      modalIsOpen: false,
      tmpModalInfo: {}
    }
  },
  props: ['modalInfo'],
  components: {
    modal
  },
  methods: {
    showModal () {
      this.modalIsOpen = true
    },
    closeModal () {
      this.modalIsOpen = false
    },
    submitInfo () {
      this.$dispatch('operations')
      this.modalIsOpen = false
    }
  }
}
</script>

<style lang="css">
h4{
  font-size: 18px;
}
</style>
