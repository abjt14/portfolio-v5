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
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(0%);
    -webkit-transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) .5s;
    -o-transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) .5s;
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) .5s;

    .message-wrapper {
      overflow: hidden;

      .message {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 300;
        transform: translateY(100%);
        animation: message-init 1s ease-out forwards;

        @keyframes message-init {
          from {
            transform: translateY(400%);
          }

          to {
            transform: translateY(0%);
          }
        }
      }
    }


    &.loaded {
      transform: translateY(-100%);

      .message-wrapper {
        .message {
          animation: message-loaded 1s ease-in forwards;

          @keyframes message-loaded {
            from {
              transform: translateY(0%);
            }

            to {
              transform: translateY(-400%);
            }
          }
        }
      }
    }
  }
</style>