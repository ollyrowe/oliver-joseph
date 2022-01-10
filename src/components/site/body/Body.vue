<template>
  <div class="has-background-grey-lighter">
    <div
      class="container box is-flex is-max-desktop has-background-grey-lightest is-radiusless p-0"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Body",
  methods: {
    displayAlert() {
      this.$buefy.dialog.alert({
        title: "New for 2022 - We're moving!",
        message:
          "As from 18th January 2022, we are moving to a new location in Midsomer Norton...",
        confirmText: "OK",
        canCancel: ["outside", "escape"]
      });
    }
  },
  mounted() {
    this.displayAlert();
  }
};
</script>
