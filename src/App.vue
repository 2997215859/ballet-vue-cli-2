<template lang="html">
  <div>
    <div class="">
      <router-view><router-view>
    </div>
    <modal :show.sync="showCustomModal" effect="fade" width="400">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">
          <i>Custom</i> <code>Modal</code> <b>Title</b>
        </h4>
      </div>
      <div slot="modal-body" class="modal-body">...</div>
      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-default" @click="showCustomModal = false">Exit</button>
        <button type="button" class="btn btn-success" @click="showCustomModal = false">Custom Save</button>
      </div>
    </modal>
  </div>
</template>
<script>
import { modal } from 'vue-strap'
export default {
  replace: false,
  data () {
    return {
      showCustomModal: false
    }
  },
  components: {
    modal
  }
}
</script>
<style lang="css"></style>
