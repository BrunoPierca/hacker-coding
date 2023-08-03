<script lang="ts">
import "./assets/base.scss"
import AppBar from "./components/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>

<template>
  <div id="app">
    <AppBar></AppBar>
    <v-main>
      <ArticleList></ArticleList>
    </v-main>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
