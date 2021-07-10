<template>
  <div class="has-background-grey-darkest">
    <div class="is-flex">
      <a class="menu-button" @click="toggleNavMenu()">
        <b-icon icon="menu" size="is-small" class="menu-icon" />
        <span>Menu</span>
      </a>
      <a class="menu-button" @click="handleNavigateTo('/hair')">
        <b-icon icon="content-cut" size="is-small" class="menu-icon" />
        <span>Services</span>
      </a>
      <a href="tel:+447936142317" class="menu-button">
        <b-icon icon="phone" size="is-small" class="menu-icon" />
        <span>Phone</span>
      </a>
      <a
        href="mailto:oliverjosephmsn@aol.com?subject=Website Enquiry"
        class="menu-button"
      >
        <b-icon icon="email" size="is-small" class="menu-icon" />
        <span>Email</span>
      </a>
    </div>
    <b-menu v-if="displayNavMenu" class="pt-4">
      <b-menu-list :expanded="false">
        <b-menu-item
          v-for="(route, index) in routes"
          :key="index"
          :label="route.name"
          class="menu-list-item has-text-centered"
          @click="handleNavigateTo(route.path)"
        />
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: "MobileNavBar",
  props: {
    routes: Array,
    currentRoute: Object
  },
  data: () => ({
    displayNavMenu: false
  }),
  methods: {
    toggleNavMenu() {
      this.displayNavMenu = !this.displayNavMenu;
    },
    closeNavMenu() {
      this.displayNavMenu = false;
    },
    handleNavigateTo(path) {
      this.closeNavMenu();

      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.menu-button {
  flex-grow: 1;
  color: white !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.menu-icon > i {
  height: 16px;
}

.menu-list-item > a {
  color: white !important;
  border-bottom: thin solid $grey-light;
  padding: 0.6rem;
}
</style>
