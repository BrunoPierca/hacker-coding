<script lang="ts">
import AppBar from "./components/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>

<template>
  <v-app id="app">
    <AppBar />
    <v-main>
      <ArticleList />
    </v-main>
  </v-app>
</template>

