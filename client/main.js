import Vue from "vue";
import App from "../components/App.vue";
import router from "../router";

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
