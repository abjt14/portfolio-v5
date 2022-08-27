<script setup lang="ts">
  import Project from './Project.vue';

  interface project {
    title: string,
    role: string,
    year: string,
    summary: string,
    tags: string[]
  }

  const projects: project[] = [
    {
      title: 'AvenueHQ',
      role: 'Junior Full-Stack Engineer',
      year: '2022',
      summary: 'Worked on and maintained the client-facing product of the company, providing digital marketing services to help realty businesses stay connected with their clients and invite new ones.',
      tags: [
        'ReactJS', 'PHP', 'Laravel', 'MySQL'
      ]
    },
    {
      title: 'Sift (Academic)',
      role: 'Student at Langara College',
      year: '2021',
      summary: "Developed an application that enables users to scan objects with their phone's camera and learn how and where to recycle trash.",
      tags: [
        'React Native', 'GSAP', 'NodeJS', 'GraphQL', 'MongoDB'
      ]
    },
    {
      title: 'Outlined',
      role: 'Software Engineer',
      year: '2019-2020',
      summary: 'Built and maintained a SaaS Artificial Intelligence driven Digital Design Assistant that allows a designer or a brand marketer to accelerate their design asset creation and manage communication accros large teams.',
      tags: [
        'Laravel', 'FabricJS', 'Shell Scripting', 'MySQL'
      ]
    }
  ];
</script>

<template>
  <div id="work" class="page-section">
    <div class="work-col">
      <div id="work-summary">
        I've had the opportunity to work on versatile projects in the last 3 years with some amazing teams.

        <br /><br />

        Building beautiful interfaces and performant backend applications
        for academic, client-facing, and buisiness-facing projects.
      </div>
    </div>
    <div class="work-col">
      <div id="work-exp">
        <Project
          v-for="project in projects"
          :title="project.title"
          :role="project.role"
          :year="project.year"
          :summary="project.summary"
          :tags="project.tags"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #work {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--border);
    transition: border .3s ease;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }

    .work-col {
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
        transition: border .3s ease;

        @media only screen and (max-width: 900px) {
          border: none;
        }
      }

      #work-summary {
        flex: 4;
        font-size: 1.25rem;
        font-weight: 300;
        position: sticky;
        top: 5rem;

        @media only screen and (max-width: 900px) {
          position: unset;
        }
      }

      #work-exp {
        display: grid;
        gap: 5rem;

        @media only screen and (max-width: 900px) {
          gap: 1rem;
        }
      }
    }
  }
</style>