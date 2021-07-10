<template>
  <div>
    <Carousel :images="images" />
    <div class="px-5 pb-4">
      <div class="px-5 pb-4 is-paddingless-mobile">
        <div class="title is-size-4 my-4">Ear Piercing</div>
        <Table
          title="Our Services"
          :columns="earPiercingColumns"
          :data="earPiercingData"
          :showColumns="false"
        />
        <InfoMessage>
          The system we use is fully endorsed by the British Council. The
          earrings are sterilised and anti-allergenic for your protection, which
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
  name: "EarPiercing",
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
          service: "Ear Piercing (Ear-lobe)",
          price: "£32"
        }
      ]
    };
  }
};
</script>
