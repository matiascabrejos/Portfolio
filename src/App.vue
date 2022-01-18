<template>
  <the-navbar></the-navbar>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from './components/TheFooter.vue'
export default {
  components: { TheNavbar, TheFooter} ,
};
</script>


#app {
  background-color: #0e1118;
}

<style>
.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
body {
  background-color: #444444;
}
</style>

