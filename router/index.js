import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import ReservationPage from "../components/ReservationPage.vue";
import ForgottenPassword from "../components/ForgottenPassword.vue";
import NotFound from "../components/NotFound.vue";
import List from "../components/List.vue";
Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Home", name: "Home", component: Home },
    {
      path: "/reservation",
      name: "ReservationPage",
      component: ReservationPage
    },
    {
      path: "/forgotten-password",
      name: "ForgottenPassword",
      component: ForgottenPassword
    },
    {
      path: "/list",
      name: "List",
      component: List,
      props: true
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
