<template>
  <div class="is-fullwidth">
    <Carousel :images="images" />
    <div class="mt-3 columns px-5 is-marginless-mobile is-paddingless-mobile">
      <div class="column">
        <b-message
          title="New for 2022 - We've Moved!"
          :closable="false"
          type="is-grey-dark"
        >
          <p>
            We have moved to a new location in Midsomer Norton which is within
            easy access from the Norton-Radstock Greenway. Please see contact
            page for further details.
          </p>
        </b-message>
        <b-message title="About Us" :closable="false" type="is-grey-dark">
          <p>
            Since we opened our doors in 2006, we have taken pride in offering
            exceptional standards in services and client care within a welcoming
            and professional environment.
          </p>
        </b-message>
      </div>
      <div class="column">
        <OpeningTimes />
        <InfoMessage icon="mdi-face-mask">
          Please wear a face mask to your appointment
        </InfoMessage>
      </div>
      <div class="column">
        <b-message
          title="Hair Appointments"
          type="is-grey-dark"
          :closable="false"
        >
          <p>
            Appointments can be made by leaving a voicemail or text message on
            07936 142317. We will return your message within 24 hours.
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
        <router-link to="/hair">
          <b-image
            :src="require('@/assets/thumbs/oliver-joseph-hair-thumb.png')"
            alt="Oliver Joseph Hair"
          />
        </router-link>
      </div>
      <div class="column p-5">
        <router-link to="/ear-piercing">
          <b-image
            :src="require('@/assets/thumbs/oliver-joseph-piercing-thumb.png')"
            alt="Oliver Joseph Beauty"
          />
        </router-link>
      </div>
      <div class="column p-5">
        <router-link to="/wedding">
          <b-image
            :src="require('@/assets/thumbs/oliver-joseph-wedding-thumb.jpg')"
            alt="Oliver Joseph Wedding"
          />
        </router-link>
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
import InfoMessage from "../components/data/InfoMessage.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    OpeningTimes,
    InfoMessage
  },
  data() {
    return {
      images: [
        {
          filename: "home/home-image1.jpg",
          caption: "We have moved to a new location in Midsomer Norton"
        },
        {
          filename: "home/home-image2.jpg",
          caption: "Welcome to the new salon..."
        },
        {
          filename: "home/home-image3.jpg",
          caption:
            "We stock Olaplex, Moroccan oil, Color Wow & Tigi products..."
        },
        {
          filename: "home/home-image4.jpg",
          caption: "We offer an extensive range of cutting & technical services"
        },
        {
          filename: "home/home-image5.jpg",
          caption:
            "To make an appointment, please call or leave a message on 07936142317"
        }
      ]
    };
  }
};
</script>
