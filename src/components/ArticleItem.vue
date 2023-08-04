<script>
import { sanitizeInput } from "../helpers/sanitizeInput";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    setActiveItem: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClickButton() {
      this.setActiveItem(this.item);
    },
  },
  data() {
    return {
      sanitizeInput,
    };
  },
};
</script>
<template>
  <v-row class="my-2" justify="center">
    <v-col sm="10" lg="8" align-self="center">
      <v-card outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-1 d-flex flex-row">
              {{ item.story_title ?? "No title" }}
              <v-spacer />
              <v-btn
                rounded
                icon
                elevation="3"
                :disabled="!item.story_url"
                :href="item.story_url ?? ''"
                target="_blank"
                class="me-1"
              >
                <v-icon>link</v-icon>
              </v-btn>
            </div>

            <v-list-item-subtitle>{{
              item.comment_text
                ? sanitizeInput(item.comment_text)
                : "No comment"
            }}</v-list-item-subtitle>

            <v-list-item-title class="text-h5 mt-3 d-flex flex-row">
              {{ item.author ?? "Unknown author" }}
              <v-spacer />
              <v-btn
                rounded
                outlined
                color="primary"
                text
                @click="handleClickButton"
              >
                View details
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>
