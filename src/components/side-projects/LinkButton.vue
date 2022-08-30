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
    background: #000;
    border-radius: 2rem;
    max-width: -webkit-fit-content;
    max-width: -moz-fit-content;
    max-width: fit-content;

    .lb-content {
      font-size: 1rem;
      color: #000;
      background: #fff;
      padding: .5rem 1rem;
      border: 1px solid #000;
      border-radius: 2rem;
      -webkit-transition: transform .1s ease;
      -o-transition: transform .1s ease;
      transition: transform .1s ease;

      &:hover {
        -webkit-transform: translate(-.25rem, -.25rem);
        -ms-transform: translate(-.25rem, -.25rem);
        transform: translate(-.25rem, -.25rem);
      }

      &:active {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0);
      }
    }
  }
</style>