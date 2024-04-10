<template>
  <a :href="link" class="card contact-card is-fullwidth-mobile">
    <div
      class="card-content px-2 is-flex is-flex-direction-column is-align-items-center"
    >
      <span class="icon is-large is-info mb-4">
        <i :class="`mdi ${icon} mdi-48px`" />
      </span>
      <div class="title is-size-4">
        {{ title }}
      </div>
      <a :href="link">
        <button class="button is-ghost is-shadowless subtitle is-size-6">
          {{ content }}
        </button>
      </a>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    link: String,
    icon: String,
  },
};
</script>

<style scoped>
.contact-card {
  flex: 1 1 0px;
  min-width: 200px;
}
</style>
