<template>
  <div>
    <AppBar />
    <NavBar />
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "Header",
  components: {
    AppBar,
    NavBar
  }
};
</script>
