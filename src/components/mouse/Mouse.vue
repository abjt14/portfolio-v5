<script setup lang="ts">
  import { ref } from 'vue';
  import { useMouse } from '../../composables/mouse';
  import { useEventListener } from '../../composables/event-listener';

  const mouseXY = ref(useMouse());
  const mouseVisibility = ref(1);
  const classList = ref(['']);

  useEventListener(document.body, 'mouseenter', () => {
    mouseVisibility.value = 1;
  });
  useEventListener(document.body, 'mouseleave', () => {
    mouseVisibility.value = 0;
  });
  document.querySelectorAll('.link-mouse-interact').forEach(el => {
    el.addEventListener('mouseenter', () => {
      classList.value.push('link-hovered');
    });
    el.addEventListener('mouseleave', () => {
      const index = classList.value.indexOf('link-hovered');
      if (index !== -1) {
        classList.value.splice(index, 1);
      }
    });
  });
</script>

<template>
  <div id="mouse-wrapper">
    <div
      :class="classList"
      :style="`
      -webkit-transform: translate3d(${mouseXY.x}px, ${mouseXY.y}px, 0) translate(-50%, -50%);
      -ms-transform: translate3d(${mouseXY.x}px, ${mouseXY.y}px, 0) translate(-50%, -50%);
      transform: translate3d(${mouseXY.x}px, ${mouseXY.y}px, 0) translate(-50%, -50%);
      opacity: ${mouseVisibility};
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
      border-radius: 50%;
      background-color: #fff;
      will-change: transform, opacity;
      display: inline-block;

      -webkit-transform-origin: center center;
      -ms-transform-origin: center center;
      transform-origin: center center;

      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);

      -webkit-transition: all .8s cubic-bezier(.19,1,.22,1);
      -o-transition: all .8s cubic-bezier(.19,1,.22,1);
      transition: all .8s cubic-bezier(.19,1,.22,1);

      &.link-hovered {
        width: 48px;
        height: 48px;
      }
    }

    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
</style>