<template>
  <div class="wrapper mx-auto px-5">
    <hr class="h-px mt-6 max-w-screen-xl mx-auto" />
    <div class="md:py-5">
      <div
        class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row"
      >
        <div class="logo flex items-center">
          <p class="text-sm text-gray-700 dark:text-gray-200 mx-1">
            © 2021 Built with ♡
          </p>
          <a
            aria-label="AymaneMx.com"
            class="text-sm underline text-gray-700 dark:text-gray-200"
            href="https://github.com/aymaneMx/nuxt-portfolio-dev"
            >Open sourced on Github</a
          >
        </div>
        <div>
          <i class="devicon-linkedin-plain text-white cursor-pointer"></i>
          <i class="devicon-github-original text-white cursor-pointer"></i>
          <i class="devicon-facebook-plain text-white cursor-pointer"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border-top: 3px solid #17b5cb;
}

i:hover {
    color: #17b5cb;
}
</style>
