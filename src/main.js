import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import "./assets/tailwind.css";

import TheHome from "./pages/TheHome.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheHome,
    },
  ],
  linkActiveClass: "active",
});

app.use(router);
app.mount("#app");
