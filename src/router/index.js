import Vue from "vue";
import VueRouter from "vue-router";
// Import views
import Home from "../views/Home.vue";
import Hair from "../views/Hair.vue";
import Beauty from "../views/Beauty.vue";
import Wedding from "../views/Wedding.vue";
import CareersAndVacancies from "../views/CareersAndVacancies.vue";
import ContactUs from "../views/ContactUs.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hair",
    name: "Hair",
    component: Hair
  },
  {
    path: "/beauty",
    name: "Beauty",
    component: Beauty
  },
  {
    path: "/wedding",
    name: "Wedding",
    component: Wedding
  },
  {
    path: "/careers-and-vacancies",
    name: "Careers & Vacancies",
    component: CareersAndVacancies
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: ContactUs
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
