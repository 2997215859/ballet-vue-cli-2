<template lang="html">
  <div>
    <div class="">
      <router-view><router-view>
    </div>
  </div>
</template>
<script>
export default {
  replace: false,
  data () {
    return {
      showCustomModal: false
    }
  }
}
</script>
<style lang="css"></style>
