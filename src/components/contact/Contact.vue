<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { onIntersect } from '../../composables/intersection-observer';
  import Contact3DModel from './Contact3DModel.vue';

  interface link {
    href: string,
    title: string
  }

  const links: link[] = [
    {
      href: 'https://www.linkedin.com/in/abjt14/',
      title: 'LinkedIn'
    },
    {
      href: 'https://github.com/abjt14',
      title: 'Github'
    },
    {
      href: 'https://codepen.io/abjt14',
      title: 'Codepen'
    },
    {
      href: 'https://www.artstation.com/abjt',
      title: 'Artstation'
    },
  ];

  const copied = ref(false);

  const copyEmail = async () => {
    if (!copied.value) {
      try {
        await navigator.clipboard.writeText('contact@abjt.dev');
        copied.value = true;

        setTimeout(() => {
          copied.value = false;
        }, 2500);
      } catch($e) {
        alert('Cannot copy');
      }
    }
  }

  const showModel = ref(false);

  const onEnter = () => {
    showModel.value = true;
  }

  const onExit = () => {
    // placeholder
  }

  const observer = ref();
  const scrollRef = ref();

  onMounted(() => {
    observer.value = onIntersect(scrollRef.value, onEnter, onExit, {
      threshold: .3,
    });
  });
</script>

<template>
  <div id="contact" class="page-section" ref="scrollRef">
    <div class="contact-row">
      <div id="contact-headline-cont">
        <h1 class="headline-col">
          I'd love to <div class="animated-contact-headline">hear from you.</div>
        </h1>
        <button id="email" @click="copyEmail">contact@abjt.dev <div>⧉</div></button>
        <div id="email-copy-success-message" :class="[copied ? 'copied' : '']">
          Copied email to clipboard 🙌
        </div>
      </div>
    </div>
    <div class="contact-row">
      <div class="contact-row-inner">
        <div id="site-info">
          <div>
            Site built using <span>Vue</span>, <span>Mixamo</span>, and <span>Blender</span>. Deployed on <span>Vercel</span>.
          </div>
          <div>
            © {{ new Date().getFullYear() }} All rights reserved.
          </div>
        </div>
      </div>
      <div class="contact-row-inner text-align-right text-align-left-mobile">
        <div id="social-links">
          <a
            v-for="link in links"
            :href="link.href"
            class="link-mouse-interact"
            target="_blank"
          >
            {{ link.title }}&nbsp;<div>↗</div>
          </a>
        </div>
      </div>
    </div>
    <div id="contact-3d-container">
      <Contact3DModel :showModel="showModel" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  #contact {
    position: relative;
    min-height: 100vh;
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
    margin-top: 10rem;

    @media only screen and (max-width: 900px) {
      padding: 2rem 2rem 3rem 2rem;
    }

    .contact-row {
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
        gap: 2rem;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      #contact-headline-cont {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
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
        gap: 1rem;

        @media only screen and (max-width: 900px) {
          gap: 1rem;
        }

        h1.headline-col {
          font-size: 4rem;
          font-weight: 400;
          -webkit-box-flex: 4;
          -ms-flex: 4;
          flex: 4;

          @media only screen and (max-width: 900px) {
            font-size: 2.5rem;
            font-weight: 600;
            text-align: center;
          }

          .animated-contact-headline {
            display: inline-block;
            font-style: normal;
            font-weight: 900;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: -webkit-gradient(linear, left top, right top, from(#0077e7), to(#01d8d1));
            background-image: -o-linear-gradient(left, #0077e7, #01d8d1);
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

        button#email {
          color: var(--color);
          font-size: 1.25rem;
          font-weight: 300;
          text-align: left;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;

          @media only screen and (max-width: 900px) {
            font-size: 1.25rem;
            -ms-flex-item-align: center;
            -ms-grid-row-align: center;
            align-self: center;
          }

          > div {
            display: inline-block;
            -webkit-transition: transform .1s ease;
            -o-transition: transform .1s ease;
            transition: transform .1s ease;
          }

          &:hover {
            > div {
              -webkit-transform: translateX(.5rem);
              -ms-transform: translateX(.5rem);
              transform: translateX(.5rem);
            }
          }
        }

        #email-copy-success-message {
          font-size: 1rem;
          font-weight: 100;
          opacity: 0;
          -webkit-transition: transform .3s ease, opacity .3s ease;
          -o-transition: transform .3s ease, opacity .3s ease;
          transition: transform .3s ease, opacity .3s ease;
          margin-top: 0rem;

          @media only screen and (max-width: 900px) {
            text-align: center;
            -webkit-transform: translateY(-1rem);
            -ms-transform: translateY(-1rem);
            transform: translateY(-1rem);
            margin-top: 1rem;
          }

          &.copied {
            opacity: 1;
            -webkit-transform: translateY(-.5rem);
            -ms-transform: translateY(-.5rem);
            transform: translateY(-.5rem);

            @media only screen and (max-width: 900px) {
              text-align: center;
              -webkit-transform: translateY(-1.5rem);
              -ms-transform: translateY(-1.5rem);
              transform: translateY(-1.5rem);
            }
          }
        }
      }

      .contact-row-inner {
        font-size: 1.25rem;
        font-weight: 300;
        -ms-flex-item-align: end;
        align-self: flex-end;

        @media only screen and (max-width: 900px) {
          font-size: 1.75rem;
          font-weight: 100;
          text-align: center;
          -ms-flex-item-align: center;
          -ms-grid-row-align: center;
          align-self: center;
        }

        &:nth-of-type(2) {
          @media only screen and (max-width: 900px) {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
            -ms-flex-item-align: center;
            -ms-grid-row-align: center;
            align-self: center;
          }
        }

        #site-info {
          display: -ms-grid;
          display: grid;
          gap: .5rem;

          > div > span {
            &:nth-of-type(1) {
              color: var(--yellow);
            }

            &:nth-of-type(2) {
              color: var(--purple);
            }

            &:nth-of-type(3) {
              color: var(--red);
            }

            &:nth-of-type(4) {
              color: var(--green);
            }

          }

          @media only screen and (max-width: 900px) {
            font-size: 1rem;
            font-weight: 100;
          }
        }

        #social-links {
          display: -ms-grid;
          display: grid;
          gap: .5rem;

          @media only screen and (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          a {
            @media only screen and (max-width: 900px) {
              font-size: 1.25rem;
            }

            > div {
              display: inline-block;
              -webkit-transition: transform .3s ease;
              -o-transition: transform .3s ease;
              transition: transform .3s ease;
            }

            &:hover {
              > div {
                -webkit-transform: translateY(-.5rem);
                -ms-transform: translateY(-.5rem);
                transform: translateY(-.5rem);
              }
            }

            &:nth-of-type(1):hover {
              color: var(--yellow);
            }

            &:nth-of-type(2):hover {
              color: var(--purple);
            }

            &:nth-of-type(3):hover {
              color: var(--red);
            }

            &:nth-of-type(4):hover {
              color: var(--green);
            }
          }
        }
      }
    }

    #contact-3d-container {
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