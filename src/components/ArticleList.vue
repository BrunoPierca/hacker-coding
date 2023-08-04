
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";

import ArticleItem from './ArticleItem.vue'
import { getAllArticles } from "../services/articles";
import type { Hit } from "../interfaces";

const activeItem = ref<null | Hit>(null)
const setActiveItem = (item: Hit | null) => activeItem.value = item

const page = ref(1);
const resultsPerPage = 4

const { isLoading, isError, data } =
  useQuery({
    queryKey: ["articles", page],
    queryFn: () => getAllArticles(page, resultsPerPage),
    keepPreviousData: true
  })

const filterByStoryURL = ref(true)
const toggleFilter = () => {
  filterByStoryURL.value = !filterByStoryURL.value
}

const filteredData = computed(() => {
  if (filterByStoryURL.value) {
    return (data.value?.hits || []).filter(item => item.story_url !== null);
  } else {
    return data.value?.hits || [];
  }

});
</script>

<template>
  <v-list three-line class="d-flex flex-column flex-wrap align-center justify-center fill-height"
    style="min-height: calc(100vh - 48px);">

    <v-btn elevation="2" rounded dense @click="toggleFilter" color="primary">
      toggle {{ filterByStoryURL ? 'With' : 'Without' }} article URL
      <v-icon>{{ filterByStoryURL ? 'check' : 'close' }}</v-icon>
    </v-btn>

    <v-progress-circular :class="isLoading ? 'd-block' : 'd-none'" indeterminate color="primary" />

    <v-alert v-if="isError" dense elevation="5" prominent color="pink darken-1" dark type="error">
      Couldn't load articles, please try again later
    </v-alert>

    <v-container v-if="data" class="pt-0 ">
      <ArticleItem v-for="(item, index) in filteredData" :item="item" :key="item.story_id ? item.story_id + index : index"
        :set-active-item="setActiveItem" />
    </v-container>

    <v-spacer></v-spacer>

    <v-pagination v-model="page" :disabled="isLoading" :length="data?.nbPages ? data.nbPages - 1 : 0" :total-visible="10"
      style="max-width: 100%;" />

    <ArticleDetailsModal v-if="activeItem" :item="activeItem" :set-active-item="setActiveItem" />

  </v-list>
</template>



