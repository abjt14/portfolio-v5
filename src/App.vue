<script setup lang="ts">
  import { nextTick, onMounted, ref } from 'vue';

  import Loader from './components/loader/Loader.vue';
  import NavBar from './components/navbar/NavBar.vue';
  import Hero from './components/hero/Hero.vue';
  import Work from './components/work/Work.vue';
  import Marquee from './components/marquee/Marquee.vue';
  import SideProjects from './components/side-projects/SideProjects.vue';
  import Contact from './components/contact/Contact.vue';

  const loaded = ref(false);

  onMounted(async () => {
    await nextTick();
    setTimeout(() => {
      loaded.value = true;
    }, 2000);
  });
</script>

<template>
  <Loader :loaded="loaded" />
  <NavBar />
  <Hero />
  <Marquee title="work" emoji="👨‍💻" />
  <Work ref="scrollRef" />
  <Marquee title="side projects" emoji="🧑‍🔬" />
  <SideProjects />
  <Contact />
</template>

<style lang="scss">
  @import './assets/css/variables.css';
</style>
