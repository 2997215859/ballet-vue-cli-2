<template lang="html">
  <div class="layui-layer layui-layer-tips  layer-anim" id="layui-layer31" type="tips" times="31" showtime="600000" contype="object" style="z-index: 19891045; position: absolute; left: 12.6667px; top: -20px;">
    <div id="" class="layui-layer-content" style="background-color: rgb(53, 149, 204);">{{ tipContent }}<i class="layui-layer-TipsG layui-layer-TipsT" style="border-right-color: rgb(53, 149, 204);"></i></div><span class="layui-layer-setwin"></span>
  </div>
</template>

<script>
export default {
  props: ['tipContent']
}
</script>

<style lang="css">
.layui-layer{
  -webkit-overflow-scrolling: touch;
  top: 150px;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  -webkit-background-clip: content;
  box-shadow: 1px 1px 50px rgba(0,0,0,.3);
  border-radius: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: .3s;
  animation-duration: .3s;
}
.layui-layer, .layui-layer-shade {
    position: fixed;
    _position: absolute;
    pointer-events: auto;
}
.layui-layer-setwin {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 0;
    line-height: initial;
}
.layui-layer-tips{
  background:0 0;
  box-shadow:none;
  border:none
}
.layui-layer-tips .layui-layer-content{
  position:relative;
  line-height:22px;
  min-width:12px;
  padding:5px 10px;
  font-size:12px;
  _float:left;
  border-radius:3px;
  box-shadow:1px 1px 3px rgba(0,0,0,.3);
  background-color:#F90;color:#fff
}
.layui-layer-tips .layui-layer-close{
  right:-2px;
  top:-1px
}
.layui-layer-tips i.layui-layer-TipsG{
  position:absolute;
  width:0;
  height:0;
  border-width:8px;
  border-color:transparent;
  border-style:dashed;
  *overflow:hidden
}
.layui-layer-tips i.layui-layer-TipsB,.layui-layer-tips i.layui-layer-TipsT{
  left:5px;
  border-right-style:solid;
  border-right-color:#F90
}
.layui-layer-tips i.layui-layer-TipsT{
  bottom:-8px
}
.layui-layer-tips i.layui-layer-TipsB{
  top:-8px
}
.layui-layer-tips i.layui-layer-TipsL,.layui-layer-tips i.layui-layer-TipsR{
  top:1px;
  border-bottom-style:solid;
  border-bottom-color:#F90
}
.layui-layer-tips i.layui-layer-TipsR{
  left:-8px
}
.layui-layer-tips i.layui-layer-TipsL{
  right:-8px
}
.layer-anim{
  -webkit-animation-name:bounceIn;
  animation-name:bounceIn;
}
i, cite, em, var, address, dfn {
    font-style: italic;
}
@-webkit-keyframes bounceOut{
  100% {
    opacity:0;
    -webkit-transform:scale(.7);
    transform:scale(.7)
  }
  30%{
    -webkit-transform:scale(1.03);
    transform:scale(1.03)
  }
  0%{
    -webkit-transform:scale(1);
    transform:scale(1)}
  }
@keyframes bounceOut{
  100%{
    opacity:0;
    -webkit-transform:scale(.7);
    -ms-transform:scale(.7);
    transform:scale(.7)
  }
  30%{
    -webkit-transform:scale(1.03);
    -ms-transform:scale(1.03);
    transform:scale(1.03)
  }
  0%{
    -webkit-transform:scale(1);
    -ms-transform:scale(1);
    transform:scale(1)
  }
}
.layer-anim-close{
  -webkit-animation-name:bounceOut;
  animation-name:bounceOut;
  -webkit-animation-duration:.2s;
  animation-duration:.2s
}
@-webkit-keyframes zoomInDown{
  0%{
    opacity:0;
    -webkit-transform:scale(.1) translateY(-2000px);
    transform:scale(.1) translateY(-2000px);
    -webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out
  }
  60%{
    opacity:1;
    -webkit-transform:scale(.475) translateY(60px);
    transform:scale(.475) translateY(60px);
    -webkit-animation-timing-function:ease-out;animation-timing-function:ease-out
  }
}
@keyframes zoomInDown{
  0%{
    opacity:0;
    -webkit-transform:scale(.1) translateY(-2000px);
    -ms-transform:scale(.1) translateY(-2000px);
    transform:scale(.1) translateY(-2000px);
    -webkit-animation-timing-function:ease-in-out;
    animation-timing-function:ease-in-out
  }
  60%{
    opacity:1;
    -webkit-transform:scale(.475) translateY(60px);
    -ms-transform:scale(.475) translateY(60px);
    transform:scale(.475) translateY(60px);
    -webkit-animation-timing-function:ease-out;
    animation-timing-function:ease-out
  }
 }
</style>
