import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";

new Vue({
  el: "#helloworld",
  render: h => h(HelloWorld),
  data: {
    message: "ntm"
  }
});
