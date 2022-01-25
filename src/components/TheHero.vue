<template>
  <div class="wrapper">
    <div class="m-auto">
      <h2 class="hero-name">
        <span class="font-normal"> Hey <span class="wave">👋</span>, I'm </span
        >Matías
      </h2>
      <h3 class="hero-text">Front-End Developer</h3>
      <tech-stack></tech-stack>
      <div class="mt-5"></div>
    </div>
  </div>
</template>

<script>
import TechStack from "./TechStack.vue";

export default {
  components: { TechStack },
};
</script>

<style scoped>
.hero-name {
  @apply text-xl md:text-2xl lg:text-3xl font-semibold;
}

.hero-text {
  @apply font-bold text-2xl md:text-3xl lg:text-4xl text-focus-in;
  color: #17b5cb;
}

.wrapper {
  @apply flex h-full text-center text-white m-8;
}

.text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}
.wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}
@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}
</style>
