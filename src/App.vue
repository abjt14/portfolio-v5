<script setup lang="ts">
  import NavBar from './components/navbar/NavBar.vue';
  import Hero from './components/hero/Hero.vue';
  import Work from './components/work/Work.vue';
  import Marquee from './components/marquee/Marquee.vue';
  import SideProjects from './components/side-projects/SideProjects.vue';
  import Contact from './components/contact/Contact.vue';
</script>

<template>
  <div id="wrapper">
    <NavBar />
    <Hero />
    <Marquee title="work" emoji="👨‍💻" />
    <Work ref="scrollRef" />
    <Marquee title="side projects" emoji="🧑‍🔬" />
    <SideProjects />
    <Contact />
  </div>
</template>

<style lang="scss">
  @import './assets/css/variables.css';
</style>
