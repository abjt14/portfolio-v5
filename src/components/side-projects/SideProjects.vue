<script setup lang="ts">
import SideProject from './SideProject.vue';
  interface side_project {
    title: string,
    type: string,
    href: string,
    video_url: string,
    tags: string[],
    show: boolean
  }

  const side_projects: side_project[] = [
    {
      title: 'Magnetic Element',
      type: 'Codepen',
      href: 'https://codepen.io/abjt14/full/qBoEJwp',
      video_url: 'videos/side-projects/magnetic-element.mp4',
      tags: [
        'HTML',
        'CSS',
        'GSAP',
      ],
      show: true,
    },
    {
      title: 'Flying Rings Pointer',
      type: 'Codepen',
      href: 'https://codepen.io/abjt14/full/RwJrmpz',
      video_url: 'videos/side-projects/flying-rings-pointer.mp4',
      tags: [
        'HTML',
        'CSS',
        'JS'
      ],
      show: true,
    },
    {
      title: 'List Hover Preview',
      type: 'Codepen',
      href: 'https://codepen.io/abjt14/full/wvXMbeG',
      video_url: 'videos/side-projects/list-hover-preview.mp4',
      tags: [
        'HTML',
        'CSS',
        'JS'
      ],
      show: true,
    },
  ];
</script>

<template>
  <div id="side-projects" class="page-section">
    <div class="side-projects-col">
      <div id="sp-summary">
        I upload code doodles that I've implemented in my personal projects. I rebuild my portfolio to experiment with different designs and experiences.

        <br /><br />

        Select projects &#8594;
      </div>
    </div>
    <div class="side-projects-col">
      <div id="side-projects-exp">
        <SideProject
          v-for="project in side_projects"
          :show="project.show"
          :title="project.title"
          :type="project.type"
          :href="project.href"
          :video_url="project.video_url"
          :tags="project.tags"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #side-projects {
    display: -ms-grid;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--border);
    -webkit-transition: border .3s ease;
    -o-transition: border .3s ease;
    transition: border .3s ease;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }

    .side-projects-col {
      padding: 5rem;

      &:nth-of-type(1) {
        @media only screen and (max-width: 900px) {
          padding-bottom: 0;
        }
      }

      @media only screen and (max-width: 900px) {
        padding: 1rem;
      }

      &:first-child {
        border-right: 1px solid var(--border);
        -webkit-transition: border .3s ease;
        -o-transition: border .3s ease;
        transition: border .3s ease;

        @media only screen and (max-width: 900px) {
          border: none;
        }
      }

      #sp-summary {
        -webkit-box-flex: 4;
        -ms-flex: 4;
        flex: 4;
        font-size: 1.25rem;
        font-weight: 300;
        position: sticky;
        top: 5rem;

        @media only screen and (max-width: 900px) {
          position: unset;
        }
      }

      #side-projects-exp {
        display: -ms-grid;
        display: grid;
        gap: 5rem;

        @media only screen and (max-width: 900px) {
          gap: 1rem;
        }
      }
    }
  }
</style>