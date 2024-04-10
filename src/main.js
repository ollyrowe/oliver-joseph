import Vue from "vue";
import Buefy from "buefy";
import "./assets/styles/styles.scss";
import App from "./App.vue";
import router from "./router";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
