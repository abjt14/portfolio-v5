<script setup lang="ts">
  import Hero3DModel from './Hero3DModel.vue';
</script>

<template>
  <div id="hero" class="page-section">
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
          I Build <div class="animated-headline">Engaging Experiences</div> For The Internet
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

          .animated-headline {
            display: inline-block;
            font-style: normal;
            font-weight: 900;

            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(90deg, #0077e7, #01d8d1);
            filter: hue-rotate(0deg);
            animation: hueShift 6s infinite linear 1s;

            @keyframes hueShift {
              0% {
                filter: hue-rotate(0deg);
              }

              100% {
                filter: hue-rotate(360deg);
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