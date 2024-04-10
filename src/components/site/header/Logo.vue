<template>
  <img
    :src="require(`@/assets/logos/${image}`)"
    alt="Oliver Joseph Logo"
    class="m-auto"
  />
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    image() {
      return this.isMobile
        ? "oliver-joseph-logo-centered.png"
        : "oliver-joseph-logo.png";
    },
    isMobile() {
      return this.screenWidth <= 768;
    },
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
