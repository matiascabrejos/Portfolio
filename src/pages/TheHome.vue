<template>
  <the-hero></the-hero>
  <projects-grid></projects-grid>
</template>

<script>
import ProjectsGrid from "./ProjectsGrid.vue";
import TheHero from "../components/TheHero.vue";

export default {
  components: { ProjectsGrid, TheHero },
};
</script>
