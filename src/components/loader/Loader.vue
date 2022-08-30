<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  defineProps(['loaded']);

  const message = ref();

  const messages: string[] = [
    'Thank you for your patience.',
    'Loading your experience.',
    'Converting code to pixels.',
    'Populating the website.'
  ];

  const randomMessagePicker = () => {
    const m = messages[
      Math.floor(Math.random() * messages.length)
    ];

    message.value = m;
  }

  onMounted(() => {
    randomMessagePicker();
  });
</script>

<template>
  <div id="loader" :class="loaded ? 'loaded' : null">
    <div class="message-wrapper">
      <div class="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #loader {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000;
    z-index: 100;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #fff;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) .5s;
    -o-transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) .5s;
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) .5s;

    .message-wrapper {
      overflow: hidden;

      .message {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 300;
				-webkit-transform: translateY(100%);
				-ms-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-animation: message-init 1s ease-out forwards;
        animation: message-init 1s ease-out forwards;

        @-webkit-keyframes message-init {
          from {
            -webkit-transform: translateY(400%);
            -ms-transform: translateY(400%);
            transform: translateY(400%);
          }

          to {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
          }
        }

        @keyframes message-init {
          from {
            -webkit-transform: translateY(400%);
            -ms-transform: translateY(400%);
            transform: translateY(400%);
          }

          to {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
          }
        }
      }
    }


    &.loaded {
      -webkit-transform: translateY(-100%);
      -ms-transform: translateY(-100%);
      transform: translateY(-100%);

      .message-wrapper {
        .message {
          -webkit-animation: message-loaded 1s ease-in forwards;
          animation: message-loaded 1s ease-in forwards;

          @-webkit-keyframes message-loaded {
            from {
              -webkit-transform: translateY(0);
              -ms-transform: translateY(0);
              transform: translateY(0);
            }

            to {
              -webkit-transform: translateY(-400%);
              -ms-transform: translateY(-400%);
              transform: translateY(-400%);
            }
          }

          @keyframes message-loaded {
            from {
              -webkit-transform: translateY(0);
              -ms-transform: translateY(0);
              transform: translateY(0);
            }

            to {
              -webkit-transform: translateY(-400%);
              -ms-transform: translateY(-400%);
              transform: translateY(-400%);
            }
          }
        }
      }
    }
  }
</style>