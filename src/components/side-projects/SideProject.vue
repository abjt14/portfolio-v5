<script setup lang="ts">
  import LinkButton from './LinkButton.vue';
  defineProps(['title', 'type', 'href', 'image_url', 'tags']);
</script>

<template>
  <div class="side-project">
    <div class="sp-title">{{ title }} &nbsp;&#10022;&nbsp;  {{ type }}</div>
    <div class="sp-image">
      <img :src="image_url" alt="">
    </div>
    <div class="sp button">
      <LinkButton :href="href">
        View Project&nbsp;↗
      </LinkButton>
    </div>
    <div class="sp-tags">
      <div class="sp-tag" v-for="tag in tags">&lt;{{ tag }}&gt;</div>
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

  .side-project {
    color: #000;
    border-radius: .5rem;
    display: grid;
    gap: 1rem;
    font-size: 1.25rem;
    font-weight: 300;
    padding: 1.5rem;
    border: 1px solid #000;

    &:nth-child(1) {
      background-color: $green;
    }

    &:nth-child(2) {
      background-color: $pink;
    }

    &:nth-child(3) {
      background-color: $red;
    }

    &:nth-child(4) {
      background-color: $purple;
    }

    &:nth-child(5) {
      background-color: $yellow;
    }

    .sp-title{
      font-weight: 600;
      font-size: 1.75rem;
    }

    .sp-image {
      img {
        border-radius: 0.5rem;
      }
    }

    .sp-tags {
      display: flex;
      gap: .5rem;
      color: #000;
      font-weight: 600;
      max-width: fit-content;
      flex-wrap: wrap;

      .sp-tag {
        font-size: 1rem;
      }
    }
  }
</style>