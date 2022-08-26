<script setup lang="ts">
  defineProps(['href']);
</script>

<template>
  <a :href="href" class="link-button" target="_blank">
    <div class="lb-content">
      <slot />
    </div>
  </a>
</template>

<style scoped lang="scss">
  .link-button {
    display: block;
    position: relative;
    background-color: #000;
    border-radius: 2rem;
    max-width: fit-content;

    .lb-content {
      font-size: 1rem;
      color: #000;
      background-color: #fff;
      padding: .5rem 1rem;
      border: 1px solid #000;
      border-radius: 2rem;
      transition: transform .1s ease;

      &:hover {
        transform: translate(-.25rem, -.25rem);
      }

      &:active {
        transform: translate(0, 0);
      }
    }
  }
</style>