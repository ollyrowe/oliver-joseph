<template>
  <div>
    <div
      class="has-background-white px-3 pb-3 mx-5 is-paddingless-mobile is-marginless-mobile"
    >
      <b-image
        :src="require('@/assets/headers/contact-header.jpg')"
        alt="Contact Us Header"
      />
    </div>
    <div class="px-5">
      <div class="px-5 pb-4 is-paddingless-mobile">
        <div class="title is-size-4 my-4">Contact Us</div>
        <div class="is-flex is-flex-wrap-wrap is-paddingless-mobile">
          <div class="is-flex mb-4 is-flex-grow-1 is-fullwidth-mobile">
            <div
              class="card location-card is-flex has-background-white is-align-items-center mr-5 p-0 is-marginless-mobile"
            >
              <i class="mdi mdi-map-marker mdi-48px p-5 m-2" />
              <div class="is-flex-grow-1 py-5">
                <div class="subtitle m-2">68 Spencer Drive</div>
                <div class="subtitle m-2">Midsomer Norton</div>
                <div class="subtitle m-2">Bath</div>
                <div class="subtitle m-2">BA3 2DN</div>
              </div>
              <img
                :src="require('@/assets/images/misc/scissors-in-branches.jpg')"
                alt="Scissors in branches"
                class="location-image is-hidden-mobile"
              />
            </div>
          </div>
          <OpeningTimes class="is-flex-grow-1 mb-4 is-marginless-mobile" />
        </div>
        <div class="is-flex px-3 is-flex-wrap-wrap is-paddingless-mobile">
          <ContactCard
            title="Mobile"
            content="07936 142317"
            link="tel:+447936142317"
            icon="mdi-cellphone"
            class="my-4"
          />
          <ContactCard
            title="Email"
            content="oliverjosephmsn@aol.com"
            link="mailto:oliverjosephmsn@aol.com?subject=Website Enquiry"
            icon="mdi-email"
            class="mx-5 my-4 is-marginless-mobile"
          />
          <ContactCard
            title="Telephone"
            content="01761 416999"
            link="tel:01761416999"
            icon="mdi-phone"
            class="my-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/data/ContactCard.vue";
import OpeningTimes from "@/components/data/OpeningTimes.vue";

export default {
  name: "ContactUs",
  components: {
    ContactCard,
    OpeningTimes
  }
};
</script>

<style scoped>
.location-image {
  height: 270px;
}

.location-card {
  width: 100%;
}
</style>
