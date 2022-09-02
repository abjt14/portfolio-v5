<script setup lang="ts">
  import { ref } from 'vue';
  import { useMouse } from '../../composables/mouse';

  const mouseXY = ref(useMouse());
</script>

<template>
  <div id="mouse-wrapper">
    <div :style="`
      -webkit-transform: translate3d(${mouseXY.x - 6}px, ${mouseXY.y - 6}px, 0);
      -ms-transform: translate3d(${mouseXY.x - 6}px, ${mouseXY.y - 6}px, 0);
      transform: translate3d(${mouseXY.x - 6}px, ${mouseXY.y - 6}px, 0);
      `"></div>
  </div>
</template>

<style scoped lang="scss">
  #mouse-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    mix-blend-mode: difference;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    pointer-events: none;

    > div {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 20px;
      background-color: #fff;
      will-change: transform;
      display: inline-block;

      -webkit-transform-origin: center center;
      -ms-transform-origin: center center;
      transform-origin: center center;

      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);

      -webkit-transition: transform .8s cubic-bezier(.19,1,.22,1);
      -o-transition: transform .8s cubic-bezier(.19,1,.22,1);
      transition: transform .8s cubic-bezier(.19,1,.22,1);
    }

    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
</style>