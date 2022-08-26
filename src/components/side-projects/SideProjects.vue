<script setup lang="ts">
import SideProject from './SideProject.vue';
  interface side_project {
    title: string,
    type: string,
    href: string,
    image_url: string,
    tags: string[]
  }

  const side_projects: side_project[] = [
    {
      title: 'Portfolio V4',
      type: 'Website',
      href: 'https://abjt14.github.io/portfolio-v4/',
      image_url: '/images/side-projects/portfolio-v4.webp',
      tags: [
        'Svelte',
        'SCSS',
        'GSAP',
        'Vercel'
      ]
    },
    {
      title: 'Magnetic Element',
      type: 'Code Snippet',
      href: 'https://codepen.io/abjt14/full/qBoEJwp',
      image_url: '/images/side-projects/magnetic-element.webp',
      tags: [
        'HTML',
        'CSS',
        'GSAP',
      ]
    },
    {
      title: 'Ye Unsplash',
      type: 'Website',
      href: 'https://abjt14.github.io/ye-unsplash/',
      image_url: '/images/side-projects/ye-unsplash.webp',
      tags: [
        'HTML',
        'CSS',
      ]
    }
  ];
</script>

<template>
  <div id="side-projects" class="page-section">
    <div class="side-projects-col">
      <div id="sp-summary">
        I upload code doodles that I've implemented in my personal projects. I rebuild my porfolio to experiment with different designs and experiences.

        <br /><br />

        Select projects &#8594;
      </div>
    </div>
    <div class="side-projects-col">
      <div id="side-projects-exp">
        <SideProject
          v-for="project in side_projects"
          :title="project.title"
          :type="project.type"
          :href="project.href"
          :image_url="project.image_url"
          :tags="project.tags"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #side-projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--border);
    transition: border .3s ease;

    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    .side-projects-col {
      padding: 5rem;

      &:nth-of-type(1) {
        @media only screen and (max-width: 800px) {
          padding-bottom: 0;
        }
      }

      @media only screen and (max-width: 800px) {
        padding: 1rem;
      }

      &:first-child {
        border-right: 1px solid var(--border);
        transition: border .3s ease;

        @media only screen and (max-width: 800px) {
          border: none;
        }
      }

      #sp-summary {
        flex: 4;
        font-size: 1.25rem;
        font-weight: 300;
        position: sticky;
        top: 5rem;

        @media only screen and (max-width: 800px) {
          position: unset;
        }
      }

      #side-projects-exp {
        display: grid;
        gap: 5rem;

        @media only screen and (max-width: 800px) {
          gap: 1rem;
        }
      }
    }
  }
</style>