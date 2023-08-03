
<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import ArticleItem from './ArticleItem.vue'
import { getAllArticles } from "../services/articles";

const { isLoading, isError, data, error, isFetching, isPreviousData } =
  useQuery({
    queryKey: ["articles"],
    queryFn: () => getAllArticles(),
  })

</script>

<template>
  <v-list three-line>
    <v-alert dense elevation="5" prominent type="error">
      Couldn't load articles, please try again later
    </v-alert>

    <v-progress-circular indeterminate color="primary" v-if="isLoading" />

    <!-- <div v-else-if="!data?.hits"> -->
    <div v-else-if="!data?.hits">
      aaa
    </div>
    <div v-else>
      <ArticleItem v-for="(item, index) in data.hits" :item="item" :key="index" />
    </div>
  </v-list>
  <!-- <template>
    <div class="text-center" >
      <v-pagination
        v-model="page" 
        :length="4"
        circle
      ></v-pagination>
    </div>
</template> -->
</template>

