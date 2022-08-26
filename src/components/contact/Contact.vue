<script setup lang="ts">
  import { ref } from 'vue';
  import Footer3DModel from './Footer3DModel.vue';

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
</script>

<template>
  <div id="contact" class="page-section">
    <div class="contact-row">
      <div id="contact-headline-cont">
        <h1 class="headline-col">
          I'd love to hear from you.
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
            Site built using <span>Vite</span>, <span>Vue</span>, <span>Mixamo</span>, and <span>Blender</span>. Deployed on <span>Vercel</span>.
          </div>
          <div>
            © 2022 All rights reserved.
          </div>
        </div>
      </div>
      <div class="contact-row-inner text-align-right text-align-left-mobile">
        <div id="social-links">
          <a
            v-for="link in links"
            :href="link.href"
            target="_blank"
          >
            {{ link.title }}&nbsp;<div>↗</div>
          </a>
        </div>
      </div>
    </div>
    <div id="footer-3d-container">
      <!-- <Footer3DModel /> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
  #contact {
    position: relative;
    min-height: calc(100vh);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5rem;

    @media only screen and (max-width: 800px) {
      padding: 2rem 2rem 3rem 2rem;
    }

    .contact-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      @media only screen and (max-width: 800px) {
        flex-direction: column;
        gap: 2rem;
        align-items: center;
      }

      #contact-headline-cont {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;

        @media only screen and (max-width: 800px) {
          gap: 2rem;
        }

        h1.headline-col {
          font-size: 4rem;
          font-weight: 400;
          flex: 4;

          @media only screen and (max-width: 800px) {
            font-size: 2.5rem;
            font-weight: 600;
            text-align: center;
          }
        }

        button#email {
          color: var(--color);
          font-size: 1.75rem;
          text-align: left;
          width: fit-content;

          @media only screen and (max-width: 800px) {
            align-self: center;
          }

          > div {
            display: inline-block;
            transition: transform .1s ease;
          }

          &:hover {
            > div {
              transform: translateX(.5rem);
            }
          }
        }

        #email-copy-success-message {
          font-size: 1rem;
          font-weight: 100;
          opacity: 0;
          transition: all .3s ease;

          @media only screen and (max-width: 800px) {
            text-align: center;
            transform: translateY(-1rem);
          }

          &.copied {
            opacity: 1;
            transform: translateY(-.5rem);

            @media only screen and (max-width: 800px) {
              text-align: center;
              transform: translateY(-1.5rem);
            }
          }
        }
      }

      .contact-row-inner {
        font-size: 1.25rem;
        font-weight: 300;
        align-self: flex-end;

        @media only screen and (max-width: 800px) {
          font-size: 1.75rem;
          font-weight: 100;
          text-align: center;
        }

        &:nth-of-type(2) {
          @media only screen and (max-width: 800px) {
            order: -1;
            align-self: center;
          }
        }

        #site-info {
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
              color: var(--pink);
            }

            &:nth-of-type(5) {
              color: var(--green);
            }

          }

          @media only screen and (max-width: 800px) {
            font-size: 1rem;
            font-weight: 100;
          }
        }

        #social-links {
          display: grid;
          gap: .5rem;

          @media only screen and (max-width: 800px) {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          a {
            @media only screen and (max-width: 800px) {
              font-size: 1.25rem;
            }

            > div {
              display: inline-block;
              transition: all .15s ease;
            }

            &:hover {
              > div {
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
              color: var(--pink);
            }

            &:nth-of-type(5):hover {
              color: var(--green);
            }
          }
        }
      }
    }

    #footer-3d-container {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      z-index: -1;
    }
  }
</style>