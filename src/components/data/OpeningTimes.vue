<template>
  <article class="message is-grey-dark has-background-dark p-3">
    <div class="message-header is-justify-content-center">
      <p>OPENING TIMES</p>
    </div>
    <div
      class="message-body has-background-dark has-text-light has-text-centered p-2"
    >
      <div class="is-flex px-5">
        <div class="has-text-left">
          <strong>
            Monday<br />
            Tuesday<br />
            Wednesday<br />
            Thursday<br />
            Friday<br />
            Saturday
          </strong>
        </div>
        <div class="has-text-right is-flex-grow-1">
          <strong>
            8am - 6pm<br />
            8am - 6pm<br />
            8am - 6pm<br />
            8am - 6pm<br />
            8am - 6pm<br />
            8am - 4.30pm
          </strong>
        </div>
      </div>
      <p class="mt-3">Free high street parking</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "OpeningTimes"
};
</script>

<style lang="scss" scoped>
.message {
  width: max-content;
  margin-left: auto;
  margin-right: auto;
}

.message-body {
  padding: 0;
  width: fit-content;
  margin: auto;
}
</style>
