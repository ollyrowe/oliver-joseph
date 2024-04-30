import Vue from "vue";
import VueRouter from "vue-router";
// Import views
import Home from "../views/Home.vue";
import Hair from "../views/Hair.vue";
import EarPiercing from "../views/EarPiercing.vue";
import ContactUs from "../views/ContactUs.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hair",
    name: "Hair",
    component: Hair,
  },
  {
    path: "/ear-piercing",
    name: "Ear Piercing",
    component: EarPiercing,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: ContactUs,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
