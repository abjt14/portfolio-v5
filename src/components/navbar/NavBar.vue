<script setup lang="ts">
  const scrollToTop = () => {
    window.location.href = "https://www.abjt.dev";
  };

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }
</script>

<template>
  <nav>
    <button id="logo" @click="scrollToTop">ABJT</button>
    <button id="contact-button" @click="scrollToBottom">
      Socials
    </button>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .75rem 5rem;
    border-bottom: 1px solid var(--border);
    font-weight: 300;
    z-index: 10;

    @media only screen and (max-width: 900px) {
      padding: .75rem 2rem;
    }

    button {
      font-weight: 300;
      font-size: 1.25rem;

      @media only screen and (max-width: 900px) {
        font-size: 1.75rem;
      }
    }
  }
</style>