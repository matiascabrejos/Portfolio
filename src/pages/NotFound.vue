<template>
  <h1 class="text-white text-center">
    Page not found - Go to
    <router-link to="/" class="link">Home</router-link> or
    <router-link to="/about" class="link">About</router-link>
  </h1>
</template>

<style scoped>
.link {
  @apply font-semibold hover:underline;
  color: #17b5cb;
}
</style>
