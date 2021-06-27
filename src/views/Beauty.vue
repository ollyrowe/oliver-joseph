<template>
  <div>
    <Carousel :images="images" />
    <div class="px-5 pb-4">
      <div class="px-5 pb-4 is-paddingless-mobile">
        <div class="title is-size-4 my-4">Beauty</div>
        <b-message type="is-grey-dark">
          We offer a wide range of beauty and holistic treatments. Please call
          the salon for further details.
        </b-message>
        <Table
          title="Ear Piercing"
          :columns="earPiercingColumns"
          :data="earPiercingData"
          :showColumns="false"
        />
        <InfoMessage>
          The system we use is fully endorsed by the British Council. The
          earrings are sterilised and anti-allergic for your protection, which
          ensures trouble free enjoyment of your newly pierced ears. The price
          includes the piercing, a choice of earring and an after-care cleansing
          lotion to take home.
        </InfoMessage>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/data/Carousel.vue";
import Table from "@/components/data/Table.vue";
import InfoMessage from "@/components/data/InfoMessage.vue";

export default {
  name: "Beauty",
  components: {
    Carousel,
    Table,
    InfoMessage
  },
  data() {
    return {
      images: [
        {
          filename: "beauty/beauty-image1.jpg"
        },
        {
          filename: "beauty/beauty-image2.jpg"
        },
        {
          filename: "beauty/beauty-image3.jpg"
        },
        {
          filename: "beauty/beauty-image4.jpg"
        },
        {
          filename: "beauty/beauty-image5.jpg"
        },
        {
          filename: "beauty/beauty-image6.jpg"
        }
      ],
      earPiercingColumns: [
        {
          field: "service"
        },
        {
          field: "price"
        }
      ],
      earPiercingData: [
        {
          service: "Standard Ear Piercing",
          price: "£32"
        }
      ]
    };
  }
};
</script>
