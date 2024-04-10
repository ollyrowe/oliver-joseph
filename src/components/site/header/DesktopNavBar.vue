<template>
  <div class="has-background-grey-darkest">
    <div class="tabs container is-max-desktop is-toggle is-fullwidth px-6">
      <ul>
        <li
          v-for="(route, index) in routes"
          :key="index"
          :class="{
            'is-active': currentRoute.name === route.name,
          }"
        >
          <router-link :to="route.path" class="is-radiusless">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopNavBar",
  props: {
    routes: Array,
    currentRoute: Object,
  },
};
</script>
