import Vue from "vue";
import Vuetify from "vuetify";
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

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
