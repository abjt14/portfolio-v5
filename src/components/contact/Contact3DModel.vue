<script>
  import { useMouse } from '../../composables/mouse';

  export default {
    name: 'App',
    data() {
      return {
        isMounted: false,
        show: false,
        src: '/3d/contact.glb',
        mouse: useMouse(),
        cameraOrbit: "0deg 90deg 105%"
      }
    },
    props: {
      showModel: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.isMounted = true;
      this.loadComponent();
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

        const cameraOrbitString = `${horizontalAngle}deg ${90}deg 105%`;

        this.cameraOrbit = cameraOrbitString;
      },
      setShow() {
        setTimeout(() => {
          this.show = true;
        }, 2000);
      }
    },
    watch: {
      mouse: {
        handler(current, previous) {
          this.calcCameraOrbit(current.x, current.y);
        },
        deep: true
      },
      showModel: {
        handler() {
          this.setShow();
        }
      }
    }
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
    :camera-orbit="cameraOrbit"

    disable-zoom
    disable-tap
  />
</template>

<style scoped lang="scss">
  model-viewer {
    height: calc(1.75*(100vh - 103px));
    width: 100%;
    transform: translate(0%, -30%) scale(.5);
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity .3s ease, transform .3s ease;

    &.active {
      opacity: 1;
      transform: translate(0%, -30%) scale(1);
    }

    @media only screen and (max-width: 900px) {
      width: 200%;
      transform: translate(-22.5%, -17.5%) scale(.5);
      filter: blur(2px);

      &.active {
        opacity: 1;
        transform: translate(-22.5%, -17.5%) scale(1);
      }
    }
  }
</style>