<template>
  <div>
    <Carousel :images="images" />
    <div class="mt-3 columns px-5 is-marginless-mobile is-paddingless-mobile">
      <div class="column">
        <b-message title="About Us" :closable="false" type="is-grey-dark">
          <p>
            Since we opened our doors in 2006, we have taken pride in offering
            exceptional standards in services and client care within a welcoming
            and professional environment. We believe in constant commitment to
            our craft by continued technical development, which enables us to
            offer the most current techniques.
          </p>
          <br />
          <p>
            We use only the very best salon-professional products; Tigi,
            Moroccan oil, and Color Wow. These products are available to
            purchase from us, for you to maintain a professional finish at home.
          </p>
        </b-message>
      </div>
      <div class="column">
        <OpeningTimes />
      </div>
      <div class="column">
        <b-message
          title="Hair Appointments"
          type="is-grey-dark"
          :closable="false"
        >
          <p>
            To help with social distancing, please phone / text us if you would
            like to make a hair appointment - please do not visit us in person.
          </p>
          <br />
          <p>
            Please leave a message on the salon answer machine: 01761 416999 or
            text us on: 07936142317. We will return your call / message within
            24 hours.
          </p>
          <br />
          <p>
            New clients, or those who are booking longer services, will require
            a 50% deposit payable prior to the appointment.
          </p>
          <br />
          <p>
            A skin test may be required 48 hours prior to selected colour
            treatments.
          </p>
        </b-message>
      </div>
    </div>
    <div class="columns mb-5 px-5 is-marginless-mobile is-paddingless-mobile">
      <div class="column p-5">
        <a href="/hair">
          <b-image
            :src="require('@/assets/thumbs/oliver-joseph-hair-thumb.jpg')"
            alt="Oliver Joseph Hair"
          />
        </a>
      </div>
      <div class="column p-5">
        <a href="/ear-piercing">
          <b-image
            :src="require('@/assets/thumbs/oliver-joseph-beauty-thumb.jpg')"
            alt="Oliver Joseph Beauty"
          />
        </a>
      </div>
      <div class="column p-5">
        <a href="/wedding">
          <b-image
            :src="require('@/assets/thumbs/oliver-joseph-wedding-thumb.jpg')"
            alt="Oliver Joseph Wedding"
          />
        </a>
      </div>
    </div>
    <div>
      <div class="has-text-centered mb-5 is-marginless-mobile">
        <img
          :src="require('@/assets/logos/products/tigi-logo.png')"
          alt="TIGI Logo"
          class="mx-3 mb-5"
        />
        <img
          :src="require('@/assets/logos/products/loreal-logo.png')"
          alt="L'Oreal Logo"
          class="mx-3 mb-5"
        />
        <img
          :src="require('@/assets/logos/products/olaplex-logo.png')"
          alt="OLAPLEX Logo"
          class="mx-3 mb-5"
        />
      </div>
      <div class="has-text-centered is-marginless-mobile mb-5">
        <img
          :src="require('@/assets/logos/products/moroccan-oil-logo.png')"
          alt="Moroccan Oil Logo"
          class="mx-3 mb-5"
        />
        <img
          :src="require('@/assets/logos/products/color-wow-logo.png')"
          alt="Color Wow Logo"
          class="mx-3 mb-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/data/Carousel.vue";
import OpeningTimes from "@/components/data/OpeningTimes.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    OpeningTimes
  },
  data() {
    return {
      images: [
        {
          caption: "We offer the most current techniques",
          filename: "home/home-image1.jpg"
        },
        {
          caption: "Hairdressing in a welcoming and professional environnement",
          filename: "home/home-image2.jpg"
        },
        {
          caption: "Using only the very best salon-professional products",
          filename: "home/home-image3.jpg"
        },
        {
          caption: "We believe in constant commitment to our craft",
          filename: "home/home-image4.jpg"
        },
        { filename: "home/home-image5.jpg" }
      ]
    };
  }
};
</script>
