<template>
  <div class="mt-16 bg">
    <div
      class="flex justify-center items-center text-base font-semibold text-white"
    >
      <h1 class="text-projects">Featured Projects</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--mdi h-4 w-4 animate-bounce mt-2 color"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17l4.59-4.58z"
          fill="currentColor"
        ></path>
      </svg>
    </div>

    <div class="wrapper-small my-5">
      <div class="md:flex mt-10">
        <div class="img-grid">
          <router-link to="/">
            <img src="images/cryptoapp.png" class="img-effect" alt="" />
          </router-link>
        </div>
        <div class="wrapper-project">
          <div class="md:px-5 lg:px-0">
            <router-link to="/">
              <h2 class="title-grid">ENCRYPTION</h2>
            </router-link>
            <div class="span-group">
              <span class="span-grid"> #NuxtJS </span>
              <span class="span-grid"> #TailwindCSS </span>
              <span class="span-grid"> #daisyUI </span>
            </div>
            <p class="description-grid">
              Cryptocurrencies app where the info is fetched from CoinGecko API.
              The info is presented in two ways, table view and panel view.
            </p>
            <div>
              <div class="btn-group">
                <a
                  class="btn-grid btn-one text-white"
                  href="https://nuxt-crypto.vercel.app/"
                >
                  <i class="fa fa-laptop"></i>
                  See Project
                </a>
                <a
                  class="btn-grid btn-two ml-6"
                  href="https://github.com/matiascabrejos/Nuxt-Crypto-VTwo"
                >
                  <i class="fa fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-small my-5">
      <div class="md:flex mt-10">
        <div class="img-grid">
          <router-link to="/">
            <img src="images/mevnapp.png" class="img-effect" alt="" />
          </router-link>
        </div>
        <div class="wrapper-project">
          <div class="md:px-5 lg:px-0">
            <router-link to="/">
              <h2 class="title-grid">Blogginote</h2>
            </router-link>
            <div class="span-group">
              <span class="span-grid"> #VueJS </span>
              <span class="span-grid"> #NodeJS </span>
              <span class="span-grid"> #Express </span>
              <span class="span-grid"> #MongoDB </span>
              <span class="span-grid"> #TailwindCSS </span>
            </div>
            <p class="description-grid">
              Blogs app where you can upload, edit or delete a blog. Performing
              CRUD operations on MEVN Stack.
            </p>
            <div>
              <div class="btn-group">
                <a
                  class="btn-grid btn-one text-white"
                  href="https://mevn-crud-app.herokuapp.com/#/"
                >
                  <i class="fa fa-laptop"></i>
                  See Project
                </a>
                <a
                  class="btn-grid btn-two ml-6"
                  href="https://github.com/matiascabrejos/MEVN-DEPLOY"
                >
                  <i class="fa fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-small my-5">
      <div class="md:flex mt-10">
        <div class="img-grid">
          <router-link to="/">
            <img src="images/notesapp.png" class="img-effect" alt="" />
          </router-link>
        </div>
        <div class="wrapper-project">
          <div class="md:px-5 lg:px-0">
            <router-link to="/">
              <h2 class="title-grid">iNOTES</h2>
            </router-link>
            <div class="span-group">
              <span class="span-grid"> #VueJS </span>
              <span class="span-grid"> #TailwindCSS </span>
              <span class="span-grid"> #Firebase </span>
            </div>
            <p class="description-grid">
              Notes app where you can upload a note and it will be display on
              the app. The backend and user authentication is managed by
              firebase.
            </p>
            <div>
              <div class="btn-group">
                <a
                  class="btn-grid btn-one text-white"
                  href="https://fir-login-e87c1.web.app/home"
                >
                  <i class="fa fa-laptop"></i>
                  See Project
                </a>
                <a
                  class="btn-grid btn-two ml-6"
                  href="https://github.com/matiascabrejos/Vue-Firebase-VTwo"
                >
                  <i class="fa fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-small my-5">
      <div class="md:flex mt-10">
        <div class="img-grid">
          <router-link to="/">
            <img src="images/travelapp.png" class="img-effect" alt="" />
          </router-link>
        </div>
        <div class="wrapper-project">
          <div class="md:px-5 lg:px-0">
            <router-link to="/">
              <h2 class="title-grid">Travelify</h2>
            </router-link>
            <div class="span-group">
              <span class="span-grid"> #VueJS </span>
              <span class="span-grid"> #TailwindCSS </span>
            </div>
            <p class="description-grid">
              Landing page from a travel app. It has four pages: Home, Check-In,
              Host and About us.
            </p>
            <div>
              <div class="btn-group">
                <a
                  class="btn-grid btn-one text-white"
                  href="https://travelify-4fbf0.web.app/home"
                >
                  <i class="fa fa-laptop"></i>
                  See Project
                </a>
                <a
                  class="btn-grid btn-two ml-6"
                  href="https://github.com/matiascabrejos/Vue-Travel-VTwo"
                >
                  <i class="fa fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.span-grid {
  @apply font-semibold text-white bg-opacity-25 text-sm rounded mr-1 px-1;
  background: #17b5cb;
}

.span-group {
  @apply flex lg:justify-start md:justify-start justify-center;
}

.title-grid {
  @apply text-xl font-semibold text-white lg:text-left md:text-left text-center mb-1;
}

.btn-grid {
  @apply rounded py-2 px-4 font-semibold text-sm;
}

.btn-group {
  @apply md:px-5 lg:px-0 pt-7 pb-6 flex justify-center lg:justify-start md:justify-start;
}

.description-grid {
  @apply text-base text-white my-1;
}

.img-grid {
  @apply max-w-lg md:max-w-sm mx-auto m-2;
}

.wrapper-project {
  @apply flex flex-col justify-between max-w-lg mx-auto;
}

.btn-one {
  background: #17b5cb;
  border: 2px solid #17b5cb;
  font-family: Rajdhani, sans-serif;
}

.btn-two {
  background: transparent;
  color: #17b5cb;
  border: 2px solid #17b5cb;
  font-family: Rajdhani, sans-serif;
}

.wrapper {
  @apply max-w-screen-xl mx-auto;
}

.wrapper-small {
  @apply max-w-screen-lg mx-auto px-6;
}

.flex-center {
  @apply flex justify-center items-center;
}

.text-projects {
  @apply text-center py-4 mr-2 text-base font-semibold text-white;
}

.color {
  color: #17b5cb;
}

.img-effect {
  @apply rounded-xl transform transition duration-100 hover:scale-105;
}
</style>
