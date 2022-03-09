<template>
  <div class="text-center">
    <div class="border-wrapper">
      <h1 class="text-not-found">
        Page not found - Go to
        <router-link to="/" class="link">Home</router-link> or
        <router-link to="/about" class="link">About</router-link>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply font-semibold hover:underline;
  color: #17b5cb;
}

.border-wrapper {
  @apply border-2 inline-block m-24 rounded-xl animate-pulse;
  border-color: #17b5cb;
}

.text-not-found {
  @apply text-center text-base font-semibold text-white m-4;
}
</style>
