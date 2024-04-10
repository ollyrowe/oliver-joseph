<template>
  <article class="message is-grey-dark">
    <div class="message-header">
      <p>{{ title }}</p>
    </div>
    <div class="message-body p-0">
      <b-table
        :columns="columns"
        :data="data"
        :striped="true"
        :hoverable="true"
        :show-header="showColumns"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: "Table",
  props: {
    title: String,
    columns: Array,
    data: Array,
    showColumns: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
