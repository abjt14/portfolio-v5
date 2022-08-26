<script>
export default {
  name: 'App',
  data() {
    return {
      isMounted: false,
      show: false,
      src: '/3d/footer.glb'
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

    autoplay

    exposure="2"
    shadow-softness="0"
    shadow-intensity="0"

    camera-controls
    camera-target="0m 1m 0m"
    min-camera-orbit="auto 80deg 4.523m"
    max-camera-orbit="auto 80deg auto"
    min-field-of-view="0deg"

    disable-zoom
    disable-tap
    interaction-prompt="none"
  >
    <!-- environment-image="spruit_sunrise_1k_HDR.hdr"
    skybox-image="spruit_sunrise_1k_HDR.hdr" -->
  </model-viewer>
</template>

<style scoped lang="scss">
  model-viewer {
    height: calc(1.75*(100vh - 103px));
    width: 100%;
    transform: translate(0%, -18%);

    z-index: 0;
    pointer-events: none;

    opacity: 0;
    transition: opacity .3s ease;

    @media only screen and (max-width: 800px) {
      width: 200%;
      transform: translate(-22.5%, -17.5%);
    }

    &.active {
      opacity: 1;
    }
  }
</style>