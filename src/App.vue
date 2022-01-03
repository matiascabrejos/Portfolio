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

<style>
#app {
  background-color: #0e1118;
}
</style>
