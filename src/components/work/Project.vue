<script setup lang="ts">
  defineProps(['title', 'role', 'year', 'summary', 'tags']);
</script>

<template>
  <div class="project">
    <div class="project-title">{{ title }} &nbsp;&#10022;&nbsp; {{ year }}</div>
    <div class="project-role">{{ role }}</div>
    <div class="project-summary">{{ summary }}</div>
    <div class="project-tags">
      <div class="project-tag" v-for="tag in tags">&lt;{{ tag }}&gt;</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .project {
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
      background: var(--yellow-red-grad);
    }

    &:nth-child(2) {
      background: var(--red-purple-grad);
    }

    &:nth-child(3) {
      background: var(--purple-green-grad);
    }

    &:nth-child(4) {
      background: var(--green-yellow-grad);
    }

    .project-title{
      font-weight: 600;
      font-size: 1.75rem;
    }

    .project-summary {
      margin-top: .5rem;

      @media only screen and (max-width: 900px) {
        margin-top: 0;
      }
    }

    .project-tags {
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

      .project-tag {
        font-size: 1rem;
      }
    }
  }
</style>