<template>
  <div class="wrapper mx-auto px-10">
    <div class="md:py-10">
      <div
        class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row"
      >
        <div class="logo">
          <nuxt-link to="/">
            <h1>
              <span class="text-primary font-bold">mAt</span>dev.
            </h1>
          </nuxt-link>
        </div>

        <div class="made-by-wrapper">
          <p class="made-by-text">
            Made with ❤ by
            <a
              href="https://twitter.com/devggaurav"
              class="text-primary hover:underline"
              >Matías Cabrejos.</a
            >
          </p>
        </div>
        <div>
          <social-media></social-media>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
export default {
  components: { SocialMedia },
};
</script>

<style scoped>
.wrapper {
  border-top: 3px solid #17b5cb;
}

.made-by-wrapper {
  @apply my-5 md:my-0 order-last md:order-none text-center;
}

.made-by-text {
  @apply text-lg font-semibold text-white;
}

h1 {
  @apply text-xl font-semibold text-white;
}
</style>
