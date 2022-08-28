<script>
  import { useMouse } from '../../composables/mouse';

  export default {
    name: 'App',
    data() {
      return {
        isMounted: false,
        show: false,
        src: '/3d/hero.glb',
        mouse: useMouse(),
        cameraOrbit: "0deg 75deg 105%"
      }
    },
    mounted() {
      this.isMounted = true;
      setTimeout(() => {
        this.loadComponent();
      }, 2000);
      setTimeout(() => {
        this.show = true;
      }, 2250);
    },
    computed: {
      loadComponent() {
        return () => import('@google/model-viewer');
      },
    },
    methods: {
      calcCameraOrbit(x, y) {
        const xRatio = (x - (window.innerWidth / 2)) / (window.innerWidth / 2);
        const yRatio = (y - (window.innerHeight / 2)) / (window.innerHeight / 2);

        const horizontalAngle = 0 - parseInt((xRatio * 30).toFixed(2) * .5);
        const verticalAngle = 75 - parseInt((yRatio * 30).toFixed(2) * .5) + 15;

        const cameraOrbitString = `${horizontalAngle}deg ${verticalAngle}deg 105%`;

        this.cameraOrbit = cameraOrbitString;
      }
    },
    watch: {
      mouse: {
        handler(current, previous) {
          this.calcCameraOrbit(current.x, current.y)
        },
        deep: true
      }
    }
  }
</script>

<template>
  <model-viewer
    v-if="isMounted"
    :src="src"
    :class="show ? 'active' : null"

    animation-name="Waving|Scene"
    autoplay

    exposure="2"
    shadow-softness="0"
    shadow-intensity="0"

    camera-target="0m 1m 0m"
    :camera-orbit="cameraOrbit"

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
    background: transparent;

    &.active {
      opacity: 1;
      transform: translate(0%, -18%) scale(1);
    }

    @media only screen and (max-width: 900px) {
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