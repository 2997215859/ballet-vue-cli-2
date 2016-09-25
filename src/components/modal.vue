<template lang="html">
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
</template>
<script>
import { modal } from 'vue-strap'
export default {
  data() {
    return {
      modalIsOpen: false
    }
  },
  components: {
    modal
  }
}
</script>

<style lang="css">
</style>
