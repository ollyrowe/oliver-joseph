<template>
  <div>
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
          :showColumns="false"
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
          filename: "hair/hair-image1.jpg"
        },
        {
          filename: "hair/hair-image2.jpg"
        },
        {
          filename: "hair/hair-image3.jpg"
        }
      ],
      columns: {
        cuttingStyling: [
          {
            field: "service"
          },
          {
            field: "seniorDirector",
            label: "Senior Director",
            centered: true
          },
          {
            field: "seniorStylist",
            label: "Senior Stylist",
            centered: true
          }
        ],
        colour: [
          {
            field: "service"
          },
          {
            field: "techDirector",
            label: "Technical Director",
            centered: true
          },
          {
            field: "technician",
            label: "Technician",
            centered: true
          }
        ],
        highLightingLowLighting: [
          {
            field: "service"
          },
          {
            field: "techDirector",
            label: "Technical Director",
            centered: true
          },
          {
            field: "technician",
            label: "Technician",
            centered: true
          }
        ],
        otherServices: [
          {
            field: "service"
          },
          {
            field: "price"
          }
        ]
      },
      prices: {
        cuttingStyling: [
          {
            service: "Cut and Blow Dry",
            seniorDirector: "£40",
            seniorStylist: "£35"
          },
          {
            service: "Re-style",
            seniorDirector: "from £42",
            seniorStylist: "from £37"
          },
          {
            service: "Men's Cut and Blow Dry",
            seniorDirector: "£20",
            seniorStylist: "£17"
          },
          {
            service: "Blow Dry",
            seniorDirector: "from £22",
            seniorStylist: "£20"
          },
          {
            service: "Children",
            seniorDirector: "from £9"
          }
        ],
        colour: [
          {
            service: "Semi Glossing",
            techDirector: "£38",
            technician: "£33"
          },
          {
            service: "Tint Regrowth",
            techDirector: "£38",
            technician: "£33"
          },
          {
            service: "Full Head Colour",
            techDirector: "£40",
            technician: "£35"
          },
          {
            service: "Balayage / Ombré",
            techDirector: "price on visual consultation"
          },
          {
            service: "Colour Correction",
            techDirector: "price on visual consultation"
          },
          {
            service: "Colour Change",
            techDirector: "price on visual consultation"
          }
        ],
        highLightingLowLighting: [
          {
            service: "T Section (1/4 Head)",
            techDirector: "£40",
            technician: "£35"
          },
          {
            service: "Half Head Foils",
            techDirector: "from £50",
            technician: "from £45"
          },
          {
            service: "Full Head Foils",
            techDirector: "from £66",
            technician: "from £60"
          }
        ],
        otherServices: [
          {
            service: "Permanent Straightening",
            price: "from £76"
          },
          {
            service: "Perming",
            price: "from £50"
          },
          {
            service: "Hair up",
            price: "price on consultation"
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
