<template>
  <div class="card contact-card is-fullwidth-mobile">
    <div
      class="card-content px-2 is-flex is-flex-direction-column is-align-items-center"
    >
      <span class="icon is-large is-info mb-4">
        <slot name="icon" />
      </span>
      <div class="title is-size-4">
        {{ title }}
      </div>
      <slot name="content" class="subtitle is-size-6" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
.contact-card {
  flex: 1 1 0px;
  min-width: 200px;
}
</style>
