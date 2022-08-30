<script setup lang="ts">
  defineProps(['title', 'emoji']);
</script>

<template>
  <div class="marquee">
    <div class="marquee__inner" aria-hidden="true">
      <span v-for="i in Array.from(Array(40).keys())">&nbsp;{{ title }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ emoji }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.marquee {
		position: relative;
		overflow: hidden;
		padding: 1rem 0;
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
    margin-top: 10rem;
    -webkit-transition: border .3s ease;
    -o-transition: border .3s ease;
    transition: border .3s ease;

		.marquee__inner {
			width: -webkit-fit-content;
			width: -moz-fit-content;
			width: fit-content;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-animation: marquee 30s linear infinite;
			animation: marquee 30s linear infinite;
		}

		span {
			font-size: 1rem;
			padding: 0 .5rem;
			width: -webkit-max-content;
			width: -moz-max-content;
			width: max-content;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			gap: 1rem;

			svg {
				height: 2rem;
    		width: auto;
			}

			@media screen and (max-width: 650px) {
				padding: 0 0.25rem;
				gap: .5rem;
			}
		}

		@-webkit-keyframes marquee {
			0% {
				-webkit-transform: translateX(0);
				-ms-transform: translateX(0);
        transform: translateX(0);
			}

			100% {
				-webkit-transform: translateX(-50%);
				-ms-transform: translateX(-50%);
        transform: translateX(-50%);
			}
		}

		@keyframes marquee {
			0% {
				-webkit-transform: translateX(0);
				-ms-transform: translateX(0);
        transform: translateX(0);
			}

			100% {
				-webkit-transform: translateX(-50%);
				-ms-transform: translateX(-50%);
        transform: translateX(-50%);
			}
		}
  }
</style>