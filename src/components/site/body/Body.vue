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
  name: "Body"
};
</script>
