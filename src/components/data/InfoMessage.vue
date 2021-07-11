<template>
  <div>
    <article class="message mr-10 is-grey-light is-marginless-mobile">
      <section class="message-body">
        <div class="media is-flex is-align-items-center">
          <div class="media-left">
            <span class="icon is-large is-grey-light">
              <i :class="`mdi ${icon} mdi-48px`" />
            </span>
          </div>
          <slot class="media-content" />
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "InfoMessage",
  props: {
    icon: {
      type: String,
      default: "mdi-information"
    }
  }
};
</script>
