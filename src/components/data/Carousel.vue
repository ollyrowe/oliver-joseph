<template>
  <div
    class="has-background-white px-3 pb-3 mx-5 is-paddingless-mobile is-marginless-mobile"
  >
    <b-carousel :pause-hover="false" :interval="6000">
      <b-carousel-item v-for="(image, i) in images" :key="i">
        <b-image
          :src="require(`../../assets/images/${image.filename}`)"
          :lazy="false"
        />
        <div
          v-if="image.caption"
          class="is-flex is-flex-direction-column is-overlay is-text-align-bottom "
        >
          <div class="is-flex-grow-1" />
          <div class="subtitle overlay-text has-text-light is-size-5">
            <i>{{ image.caption }}</i>
          </div>
        </div>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    images: {
      filename: String,
      caption: String
    }
  }
};
</script>

<style scoped>
.overlay-text {
  padding: 24px;
  margin-right: 100px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 20%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>

<style>
.carousel-indicator {
  justify-content: flex-end !important;
  margin-bottom: 22px;
  padding-right: 22px !important;
}

.b-image-wrapper {
  height: fit-content !important;
}

.carousel-item > .b-image-wrapper > img {
  min-height: 300px;
}

.is-dots {
  height: 15px !important;
  width: 15px !important;
  border: none !important;
}
</style>
