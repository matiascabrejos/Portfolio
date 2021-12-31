<template>
  <div class="mt-16 bg">
    <div
      class="flex justify-center items-center text-base font-semibold text-white dark:text-gray-300"
    >
      <h2 class="text-center">Featured Projects</h2>
      <IconDoubleDown class="h-4 w-4" />
    </div>

    <div class="wrapper-small my-5">
      <div class="md:flex mt-10">
        <div class="img-grid">
          <router-link to="/">
            <img src="images/JMSpEWc.png" class="rounded-xl" alt="" />
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
              Crypto app where the info is fetched from CoinGecko API. The info
              is presented in two ways, table view and panel view.
            </p>
            <div>
              <div class="btn-group">
                <button class="btn-grid btn-one text-white">
                  <i class="fa fa-laptop"></i>
                  See Project
                </button>
                <button class="btn-grid btn-two ml-6">
                  <i class="fa fa-github"></i>
                  Source Code
                </button>
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
            <img src="images/JMSpEWc.png" class="rounded-xl" alt="" />
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
              the app. The backend and the user authentication is managed by
              firebase.
            </p>
            <div>
              <div class="btn-group">
                <button class="btn-grid btn-one text-white">
                  <i class="fa fa-laptop"></i>
                  See Project
                </button>
                <button class="btn-grid btn-two ml-6">
                  <i class="fa fa-github"></i>
                  Source Code
                </button>
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
            <img src="images/JMSpEWc.png" class="rounded-xl" alt="" />
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
              Landing page from a travel app. It has a Check-In form in one of
              the pages, as well as others features.
            </p>
            <div>
              <div class="btn-group">
                <button class="btn-grid btn-one text-white">
                  <i class="fa fa-laptop"></i>
                  See Project
                </button>
                <button class="btn-grid btn-two ml-6">
                  <i class="fa fa-github"></i>
                  Source Code
                </button>
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
            <img src="images/JMSpEWc.png" class="rounded-xl" alt="" />
          </router-link>
        </div>
        <div class="wrapper-project">
          <div class="md:px-5 lg:px-0">
            <router-link to="/">
              <h2 class="title-grid">Gamerce</h2>
            </router-link>
            <div class="span-group">
            <span class="span-grid"> #HTML </span>
            <span class="span-grid"> #Sass </span>
            <span class="span-grid"> #JavaScript </span>
            </div>
            <p class="description-grid">
              Landing page from a travel app. It has a Check-In form in one of
              the pages, as well as others features.
            </p>
            <div>
              <div class="btn-group">
                <button class="btn-grid btn-one text-white">
                  <i class="fa fa-laptop"></i>
                  See Project
                </button>
                <button class="btn-grid btn-two ml-6">
                  <i class="fa fa-github"></i>
                  Source Code
                </button>
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
  @apply text-xl font-semibold text-white lg:text-left md:text-left text-center;
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
</style>
