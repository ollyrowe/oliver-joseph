<template>
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/site/header/Header.vue";
import Body from "@/components/site/body/Body.vue";
import Footer from "@/components/site/footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>
