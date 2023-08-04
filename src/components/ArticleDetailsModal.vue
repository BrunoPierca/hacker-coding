<script lang="ts">
import type { Hit } from '../interfaces';
import { sanitizeInput } from '../helpers/sanitizeInput'

export default {

    props: {
        item: {
            type: Object as () => Hit,
            required: true,
        },
        setActiveItem: {
            type: Function,
            required: true
        }
    },
    methods: {
        handleCloseModal() {
            this.setActiveItem(null);
        },
    },

    data() {
        return {
            sanitizeInput,
            dialog: true,
        }
    }

};
</script>
<template>
    <v-dialog v-model="dialog" max-width="600px" @click:outside="handleCloseModal">
        <v-card>
            <v-card-title>
                <span class="text-h5">Article details</span>
            </v-card-title>

            <v-card-text>

                <v-container>

                    <v-row>
                        <v-col cols="12">
                            Author: {{ item.author }}
                        </v-col>

                        <v-col cols="12">
                            Created: {{ new Date(item.created_at).toDateString() }}
                        </v-col>

                        <v-col cols="12">
                            {{ item.story_title ? `Title: ${item.story_title}` : "No title" }}
                        </v-col>

                        <v-col cols="12">
                            {{ item.comment_text ? sanitizeInput(item.comment_text) : "No comment" }}
                        </v-col>

                        <v-col cols="12">
                            Tags: <v-chip v-for="tag in item._tags" :key="tag" class="mx-2">{{ tag }}</v-chip>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>

                <v-btn color="secondary" outlined text @click="handleCloseModal">
                    Close
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn color="primary" :disabled="!item.story_url" :href="item.story_url" target="_blank"
                    @click="handleCloseModal">
                    Take me there...
                </v-btn>

            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
