import Vue from "vue";
import App from "./App.vue";
import '@/assets/tailwind.css' //これ
import "./firebase.js"//firebaseを使えるようにする
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
