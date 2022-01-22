import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import "./assets/tailwind.css";

import TheHome from "./pages/TheHome.vue";
import About from "./pages/About.vue";
import NotFound from "./pages/NotFound.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheHome,
    },
    {
      path: "/about",
      component: About,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

app.use(router);
app.mount("#app");
