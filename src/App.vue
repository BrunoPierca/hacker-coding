<template>
  <v-app id="app">
    <AppBar />
    <v-main>
      <ArticleList />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import ArticleList from "./components/ArticleList.vue";

export default {
  name: "App",
  components: {
    AppBar,
    ArticleList,
  },
};
</script>
