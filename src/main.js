import Vue from "vue";
import App from "./App.vue";
import "@/assets/tailwind.css"; //これ
import "./firebase.js"; //firebaseを使えるようにする
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
