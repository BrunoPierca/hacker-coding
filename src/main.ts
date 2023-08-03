import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css'
import App from "./App.vue";
import { VueQueryPlugin } from '@tanstack/vue-query'

Vue.config.productionTip = false;

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },

});

Vue.use(Vuetify);
Vue.use(VueQueryPlugin);


new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
