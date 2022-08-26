<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  defineProps(['loaded']);

  const message = ref();

  const messages: string[] = [
    'Thank you for you patience.',
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
    <div class="message">
      {{ message }}
    </div>
  </div>
</template>

<style scoped lang="scss">
  #loader {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #000;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(0%);
    transition: transform 2s ease-in-out 2s;

    .message {
      color: #fff;
      opacity: 0;
      transform: translateY(1.5rem);
    }

    &.loaded {

    }
  }
</style>