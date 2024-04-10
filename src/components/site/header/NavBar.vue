<template>
  <div>
    <DesktopNavBar
      :routes="routes"
      :currentRoute="currentRoute"
      class="is-hidden-mobile"
    />
    <MobileNavBar
      :routes="routes"
      :currentRoute="currentRoute"
      class="is-hidden-tablet"
    />
  </div>
</template>

<script>
import { routes } from "@/router";
import DesktopNavBar from "./DesktopNavBar.vue";
import MobileNavBar from "./MobileNavBar.vue";

export default {
  components: { DesktopNavBar, MobileNavBar },
  name: "NavBar",
  data: () => ({
    // Filter for routes that have a component
    routes: routes.filter((route) => route.component),
  }),
  computed: {
    currentRoute() {
      return this.$route;
    },
  },
};
</script>
