<script setup lang="ts">
  import LinkButton from './LinkButton.vue';
  defineProps(['title', 'type', 'href', 'image_url', 'tags']);
</script>

<template>
  <div class="side-project">
    <div class="sp-title">{{ title }} &nbsp;&#10022;&nbsp;  {{ type }}</div>
    <div class="sp-image">
      <img :src="image_url" alt="" loading="lazy">
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
  .side-project {
    color: #000;
    border-radius: .5rem;
    display: grid;
    gap: 1rem;
    font-size: 1.25rem;
    font-weight: 300;
    padding: 1.5rem;

    @media only screen and (max-width: 900px) {
      padding: 1rem;
    }

    &:nth-child(1) {
      background: var(--green-yellow-grad);
    }

    &:nth-child(2) {
      background: var(--purple-green-grad);
    }

    &:nth-child(3) {
      background: var(--red-purple-grad);
    }

    &:nth-child(4) {
      background: var(--yellow-red-grad);
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
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      gap: .5rem;
      color: #000;
      font-weight: 600;
      max-width: -webkit-fit-content;
      max-width: -moz-fit-content;
      max-width: fit-content;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;

      .sp-tag {
        font-size: 1rem;
      }
    }
  }
</style>