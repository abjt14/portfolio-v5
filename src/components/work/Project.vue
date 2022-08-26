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
  // colors
  $yellow: #ffc900;
  $purple: #90a8ed;
  $red: #e2442f;
  $pink: #ff90e8;
  $green: #23a094;

  .project {
    color: #000;
    border-radius: .5rem;
    display: grid;
    gap: 1rem;
    font-size: 1.25rem;
    font-weight: 300;
    padding: 1.5rem;

    @media only screen and (max-width: 800px) {
      padding: 1rem;
    }

    &:nth-child(1) {
      background-color: $yellow;
    }

    &:nth-child(2) {
      background-color: $purple;
    }

    &:nth-child(3) {
      background-color: $red;
    }

    &:nth-child(4) {
      background-color: $pink;
    }

    &:nth-child(5) {
      background-color: $green;
    }

    .project-title{
      font-weight: 600;
      font-size: 1.75rem;
    }

    .project-summary {
      margin-top: .5rem;

      @media only screen and (max-width: 800px) {
        margin-top: 0;
      }
    }

    .project-tags {
      display: flex;
      gap: .5rem;
      color: #000;
      font-weight: 600;
      max-width: fit-content;
      flex-wrap: wrap;

      .project-tag {
        font-size: 1rem;
      }
    }
  }
</style>