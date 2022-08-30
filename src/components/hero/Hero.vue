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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 5rem;

    @media only screen and (max-width: 900px) {
      padding: 1rem;
      min-height: calc(100vh - 63.5px);
    }

    .hero-row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;

      @media only screen and (max-width: 900px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 1rem;
        -webkit-box-align: center;
        -ms-flex-align: center;
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
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        gap: 1rem;

        h1.headline-col {
          font-size: 4rem;
          font-weight: 400;
          -webkit-box-flex: 1;
          -ms-flex: 1;
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
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(90deg, #0077e7, #01d8d1);
            -webkit-filter: hue-rotate(0deg);
            filter: hue-rotate(0deg);
            -webkit-animation: hueShift 6s infinite linear 1s;
            animation: hueShift 6s infinite linear 1s;

            @-webkit-keyframes hueShift {
              0% {
                -webkit-filter: hue-rotate(0deg);
                filter: hue-rotate(0deg);
              }

              100% {
                -webkit-filter: hue-rotate(360deg);
                filter: hue-rotate(360deg);
              }
            }

            @keyframes hueShift {
              0% {
                -webkit-filter: hue-rotate(0deg);
                filter: hue-rotate(0deg);
              }

              100% {
                -webkit-filter: hue-rotate(360deg);
                filter: hue-rotate(360deg);
              }
            }
          }
        }

        #scroll-indicator {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          font-size: 5rem;
          text-align: right;
          -ms-flex-item-align: self-end;
          -ms-grid-row-align: self-end;
          align-self: self-end;
          -webkit-animation: scroll-indicator 2s ease-in-out infinite;
          animation: scroll-indicator 2s ease-in-out infinite;

          @keyframes scroll-indicator {
            0% {
              -webkit-transform: translateY(0rem);
              -ms-transform: translateY(0rem);
              transform: translateY(0rem);
            }

            50% {
              -webkit-transform: translateY(-2rem);
              -ms-transform: translateY(-2rem);
              transform: translateY(-2rem);
            }

            100% {
              -webkit-transform: translateY(0rem);
              -ms-transform: translateY(0rem);
              transform: translateY(0rem);
            }
          }

          @-webkit-keyframes scroll-indicator {
            0% {
              -webkit-transform: translateY(0rem);
              -ms-transform: translateY(0rem);
              transform: translateY(0rem);
            }

            50% {
              -webkit-transform: translateY(-2rem);
              -ms-transform: translateY(-2rem);
              transform: translateY(-2rem);
            }

            100% {
              -webkit-transform: translateY(0rem);
              -ms-transform: translateY(0rem);
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
      height: 100%;
      width: 100%;
      overflow: hidden;
      pointer-events: none;
      z-index: -1;
    }
  }
</style>