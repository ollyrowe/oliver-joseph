<template>
  <div class="is-fullwidth">
    <Carousel :images="images" />
    <div class="px-5 pb-4">
      <div class="px-5 pb-4 is-paddingless-mobile">
        <div class="title is-size-4 my-4">Hair Services & Prices</div>
        <Table
          title="Cutting & Styling"
          :columns="columns.cuttingStyling"
          :data="prices.cuttingStyling"
        />
        <Table title="Colour" :columns="columns.colour" :data="prices.colour" />
        <InfoMessage class="mb-5 mx-4">
          A skin test is required 48 hours prior to all colour treatments listed
          above
        </InfoMessage>
        <Table
          title="High Lighting & Low Lighting"
          :columns="columns.highLightingLowLighting"
          :data="prices.highLightingLowLighting"
        />
        <Table
          title="Other Services"
          :columns="columns.otherServices"
          :data="prices.otherServices"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/data/Carousel.vue";
import Table from "@/components/data/Table.vue";
import InfoMessage from "@/components/data/InfoMessage.vue";

export default {
  name: "Hair",
  components: {
    Carousel,
    Table,
    InfoMessage
  },
  data() {
    return {
      images: [
        {
          filename: "hair/hair-image1.jpg",
          caption: "Welcome to the new salon..."
        },
        {
          filename: "hair/hair-image2.jpg",
          caption: "We offer an extensive range of cutting & technical services"
        },
        {
          filename: "hair/hair-image3.jpg",
          caption:
            "To make an appointment, please call or leave a message on 07936142317"
        }
      ],
      columns: {
        cuttingStyling: [
          {
            field: "service"
          },
          {
            field: "price",
            label: "Price"
          }
        ],
        colour: [
          {
            field: "service"
          },
          {
            field: "price",
            label: "Price"
          }
        ],
        highLightingLowLighting: [
          {
            field: "service"
          },
          {
            field: "price",
            label: "Price"
          }
        ],
        otherServices: [
          {
            field: "service"
          },
          {
            field: "price",
            label: "Price"
          }
        ]
      },
      prices: {
        cuttingStyling: [
          {
            service: "Cut and Blow Dry",
            price: "£42"
          },
          {
            service: "Re-style / Long hair",
            price: "from £44"
          },
          {
            service: "Men's Cut and Blow Dry",
            price: "£22"
          },
          {
            service: "Blow Dry",
            price: "from £25"
          },
          {
            service: "Children",
            price: "from £12"
          }
        ],
        colour: [
          {
            service: "Semi Glossing",
            price: "£45"
          },
          {
            service: "Tint Regrowth",
            price: "£45"
          },
          {
            service: "Full Head Colour",
            price: "from £45"
          },
          {
            service: "Colour Correction",
            price: "price on visual consultation"
          },
          {
            service: "Colour Change",
            price: "price on visual consultation"
          }
        ],
        highLightingLowLighting: [
          {
            service: "T Section (1/4 Head)",
            price: "from £45"
          },
          {
            service: "Half Head Foils",
            price: "from £55"
          },
          {
            service: "Full Head Foils",
            price: "from £70"
          },
          {
            service: "Balayage / Ombré",
            price: "price on visual consultation"
          }
        ],
        otherServices: [
          {
            service: "Permanent Straightening",
            price: "price on visual consultation"
          },
          {
            service: "Perming",
            price: "price on visual consultation"
          },
          {
            service: "Hair up",
            price: "price on visual consultation"
          },
          {
            service: "Hair Treatments (repair, thicken and relax)",
            price: "from £11"
          },
          {
            service: "OLAPLEX",
            price: "from £15"
          }
        ]
      }
    };
  }
};
</script>
