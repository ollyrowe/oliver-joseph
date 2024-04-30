<template>
  <router-link :to="link">
    <div class="thumbnail-container">
      <b-image :src="src" :alt="alt" />
      <div class="caption">
        {{ caption }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    src: String,
    caption: String,
    alt: String,
    link: String,
  },
};
</script>

<style scoped>
.thumbnail-container {
  display: flex;
  position: relative;
  width: fit-content;
}

.caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: large;
  color: white;
  background-color: #000000a0;
  text-transform: uppercase;
  padding: 0.1em;
}
</style>
