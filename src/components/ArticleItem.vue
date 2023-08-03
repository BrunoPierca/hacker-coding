<script lang="ts">
import type { Hit } from '../interfaces';

const cleanInput = ( input : string ): string => {
    const parser = new DOMParser();

    const parsedInput = parser.parseFromString(input, 'text/html');
    
    return parsedInput.body.innerText;
}



export default {
    props: {
        item: {
            type: Object as () => Hit,
            required: true,
        },
    },
    data() {
         return {
            cleanInput
         }
    }
    
};
</script>
<template>
    <v-card class="mx-auto" max-width="344" outlined>
        
        <v-list-item three-line>
            <v-list-item-content>
                <div class="text-overline mb-4">
                    {{ item.story_title ?? "No title" }}
                </div>
                <v-list-item-title class="text-h5 mb-1">
                    {{ item.author ?? "Unknown author" }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ item.comment_text ? cleanInput(item.comment_text) : "No comment" }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions>
            <v-btn outlined rounded text onclick="console.log('open modal')">
                Button
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
