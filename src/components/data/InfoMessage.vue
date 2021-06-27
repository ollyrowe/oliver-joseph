<template>
  <div>
    <article class="message mx-4 mr-10 is-info is-marginless-mobile">
      <section class="message-body">
        <div class="media is-flex is-align-items-center">
          <div class="media-left">
            <span class="icon is-large is-info">
              <i class="mdi mdi-information mdi-48px" />
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
  name: "InfoMessage"
};
</script>
