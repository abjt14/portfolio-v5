<script>
export default {
  name: 'App',
  data() {
    return {
      isMounted: false,
      show: false,
      src: '/3d/hero.glb'
    }
  },
  mounted() {
    this.isMounted = true;
    this.loadComponent();
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
  computed: {
    loadComponent() {
      return () => import('@google/model-viewer');
    }
  },
}
</script>

<template>
  <model-viewer
    v-if="isMounted"
    :src="src"
    :class="show ? 'active' : null"
    ar
    ar-modes="webxr scene-viewer quick-look"

    animation-name="Waving|Scene"
    autoplay

    exposure="2"
    shadow-softness="0"
    shadow-intensity="0"

    camera-target="0m 1m 0m"

    auto-rotate
    rotation-per-second="30deg"

    disable-zoom
    disable-tap
  />
</template>

<style scoped lang="scss">
  model-viewer {
    height: calc(1.75*(100vh - 103px));
    width: 100%;
    transform: translate(0%, -18%) scale(.5);
    filter: invert(1);
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity .3s ease, transform .3s ease;

    &.active {
      opacity: 1;
      transform: translate(0%, -18%) scale(1);
    }

    @media only screen and (max-width: 800px) {
      width: 200%;
      transform: translate(-22.5%, -17.5%) scale(.5);
      filter: invert(1) blur(2px);

      &.active {
        opacity: 1;
        transform: translate(-22.5%, -17.5%) scale(1);
      }
    }
  }
</style>