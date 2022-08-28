<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { onIntersect } from '../../composables/intersection-observer';
  import Hero3DModel from './Hero3DModel.vue';

  const observer = ref();
  const scrollRef = ref();

  const onEnter = () => {
    document.documentElement.style.setProperty('--color', '#000');
    document.documentElement.style.setProperty('--bg', '#fff');
    document.documentElement.style.setProperty('--border', '#000');
    document.documentElement.style.setProperty('--model-filter-invert', 'invert(1)');
  }

  const onExit = () => {
    document.documentElement.style.setProperty('--color', '#fff');
    document.documentElement.style.setProperty('--bg', '#000');
    document.documentElement.style.setProperty('--border', '#fff');
    document.documentElement.style.setProperty('--model-filter-invert', 'invert(0)');
  }

  onMounted(() => {
    observer.value = onIntersect(scrollRef.value, onEnter, onExit, {
      threshold: .3,
    });
  });
</script>

<template>
  <div id="hero" class="page-section" ref="scrollRef">
    <div class="hero-row">
      <div class="hero-row-inner">
        Hello, I am Abhijeet.
      </div>
      <div class="hero-row-inner text-align-right text-align-left-mobile">
        Web Developer.<br/>CG Artist.
      </div>
    </div>
    <div class="hero-row">
      <div id="headline-cont">
        <h1 class="headline-col">
          I Build <div class="animated-italics">Engaging Experiences</div> For The Internet
        </h1>
        <div id="scroll-indicator" class="headline-col">
          ↓
        </div>
      </div>
    </div>
    <div id="hero-3d-container">
      <Hero3DModel />
    </div>
  </div>
</template>

<style scoped lang="scss">

  // colors
  $yellow: #ffc900;
  $purple: #90a8ed;
  $red: #e2442f;
  $pink: #ff90e8;
  $green: #23a094;

  #hero {
    position: relative;
    min-height: calc(100vh - 52.5px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5rem;

    @media only screen and (max-width: 900px) {
      padding: 1rem;
      min-height: calc(100vh - 63.5px);
    }

    .hero-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      @media only screen and (max-width: 900px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
      }

      .hero-row-inner {
        font-size: 1.25rem;
        font-weight: 300;

        @media only screen and (max-width: 900px) {
          font-size: 1.75rem;
          text-align: center;
        }
      }

      #headline-cont {
        flex: 1;
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        h1.headline-col {
          font-size: 4rem;
          font-weight: 400;
          flex: 1;

          @media only screen and (max-width: 900px) {
            font-size: 3rem;
            font-weight: 600;
            text-align: center;
          }

          .animated-italics {
            display: inline-block;
            font-style: normal;
            font-weight: 900;

            @keyframes animated-font-style {
              0% {
                font-style: normal;
              }

              50% {
                font-style: italic;
              }

              100% {
                font-style: normal;
              }
            }

            @keyframes animated-font-color {
              0% {
                color: $yellow;
              }

              20% {
                color: $purple;
              }

              40% {
                color: $red;
              }

              60% {
                color: $pink;
              }

              80% {
                color: $green;
              }

              100% {
                color: $yellow;
              }
            }
          }
        }

        #scroll-indicator {
          flex: 1;
          font-size: 5rem;
          text-align: right;
          align-self: self-end;
          animation: scroll-indicator 2s ease-in-out infinite;

          @keyframes scroll-indicator {
            0% {
              transform: translateY(0rem);
            }

            50% {
              transform: translateY(-2rem);
            }

            100% {
              transform: translateY(0rem);
            }
          }

          @media only screen and (max-width: 900px) {
            display: none;
          }
        }
      }
    }

    #hero-3d-container {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      pointer-events: none;
      z-index: -1;
    }
  }
</style>