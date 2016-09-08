<template lang="html">
  <div>
    <button type="button" name="button" @click="decrement">Decrement - 1</button>
  </div>
</template>

<script>
import {decrementCounter} from '../vuex/actions.js'
export default {
  vuex:{
    actions : {
      decrement : decrementCounter
    }
  }
};
</script>

<style lang="css">
</style>
