<template lang="html">
  <div id="particles-js">
    login
  </div>
</template>
<script>
import particlesJS from '../libs/particles.js'
console.log(particlesJS)
particlesJS.load('particles-js', 'static/libs/particles.json', function () {
  console.log('callback - particles.js config loaded')
})
</script>
<style lang="css">
/* ---- base ---- */
html,body{
	width:100%;
	height:100%;
	background:#111;
}
html{
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body{
  font:normal 75% Arial, Helvetica, sans-serif;
}
canvas{
  display:block;
  vertical-align:bottom;
}
</style>
