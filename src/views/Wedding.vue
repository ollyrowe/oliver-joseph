<template>
  <div class="is-fullwidth">
    <Carousel :images="images" />
    <div class="px-5 pb-4">
      <div
        class="px-5 pb-4 is-flex is-flex-direction-column is-paddingless-mobile"
      >
        <div class="title is-size-4 my-4">Wedding Hair</div>
        <b-message type="is-grey-dark">
          For a glamorous blow dry or a beautiful up do, we endeavour to create
          something that is perfect for you.
        </b-message>
        <div class="rows mb-4 mx-4 is-marginless-mobile">
          <div class="row is-flex my-4 is-align-items-center">
            <div class="is-flex">
              <div class="arrow p-1 px-2 is-size-6 has-background-grey-darker">
                TAILORED EXPERIENCE
              </div>
              <div class="arrow-right is-hidden-mobile" />
            </div>
            <div class="subtitle is-size-6 ml-5 pl-5 is-paddingless-mobile">
              <b>A complete, individual experience, tailored to you.</b>
              From preparing, with a cut and colour to designing your perfect
              finish for your special day.
            </div>
          </div>
          <div class="row is-flex my-4 is-align-items-center">
            <div class="is-flex">
              <div class="arrow p-1 px-2 is-size-6 has-background-grey-darker">
                FREE CONSULTATION
              </div>
              <div class="arrow-right is-hidden-mobile" />
            </div>
            <div class="subtitle is-size-6 ml-5 pl-5 is-paddingless-mobile">
              Call us now on <b>07936 142317</b> to arrange your <b>FREE</b>,
              no-obligation consultation.
            </div>
          </div>
        </div>
        <div
          class="is-flex is-flex-wrap-wrap is-justify-content-space-between m-4"
        >
          <img
            src="../assets/images/wedding/oliver-joseph-wedding-hair1.jpg"
            alt="Oliver Joseph Weddings"
          />
          <img
            src="../assets/images/wedding/oliver-joseph-wedding-hair2.jpg"
            alt="Oliver Joseph Weddings"
          />
          <img
            src="../assets/images/wedding/oliver-joseph-wedding-hair3.jpg"
            alt="Oliver Joseph Weddings"
          />
        </div>
        <div>
          <span class="column pr-3 has-text-centered">
            Flowers by
            <a href="http://www.sweetpeafloraldesign.co.uk/" class="is-ghost">
              Sweet Pea Floral Design
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/data/Carousel.vue";

export default {
  name: "Wedding",
  components: {
    Carousel,
  },
  data() {
    return {
      images: [
        {
          filename: "wedding/wedding-image1.jpg",
        },
        {
          filename: "wedding/wedding-image2.jpg",
        },
        {
          filename: "wedding/wedding-image3.jpg",
        },
        {
          filename: "wedding/wedding-image4.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "bulma/sass/utilities/initial-variables.sass";
@import "@/assets/styles/variables.scss";

.arrow {
  color: white;
  width: 128px;
  line-height: normal;
  height: 50px;
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 25px solid $grey-darker;
}

img {
  height: 185px;
  margin: 0.5rem auto;

  @media screen and (max-width: $tablet) {
    align-self: center;
    width: max-content;
    object-fit: cover;
  }
}
</style>
