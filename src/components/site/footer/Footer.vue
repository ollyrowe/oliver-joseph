<template>
  <footer class="has-background-grey-darker p-0">
    <!-- Body Overlap -->
    <div
      class="container is-max-desktop is-hidden-mobile pt-5 has-background-grey-lightest"
    />
    <!-- Footer -->
    <div
      class="container is-max-desktop is-flex is-flex-direction-column-mobile is-align-items-center has-text-grey-light py-6 px-4"
    >
      <span class="is-flex-grow-1 p-2">
        © {{ date }} Oliver Joseph Hairdressing
      </span>
      <button
        class="button is-ghost has-text-grey-light p-0"
        @click="openTermsOfUse"
      >
        Terms of Use
      </button>
      <span class="m-2 is-hidden-mobile">|</span>
      <button
        class="button is-ghost has-text-grey-light p-0"
        @click="openPrivacyPolicy"
      >
        Privacy & Cookie Policy
      </button>
    </div>
    <!-- Dialogs -->
    <TermsOfUse :open="displayTermsOfUse" :onClose="closeTermsOfUse" />
    <PrivacyPolicy :open="displayPrivacyPolicy" :onClose="closePrivacyPolicy" />
  </footer>
</template>

<script>
import TermsOfUse from "@/components/site/footer/TermsOfUse.vue";
import PrivacyPolicy from "@/components/site/footer/PrivacyPolicy.vue";

export default {
  name: "Footer",
  components: { TermsOfUse, PrivacyPolicy },
  data() {
    return {
      displayTermsOfUse: false,
      displayPrivacyPolicy: false
    };
  },
  computed: {
    date: () => {
      return new Date().getFullYear();
    }
  },
  methods: {
    openTermsOfUse() {
      this.displayTermsOfUse = true;
    },
    closeTermsOfUse() {
      this.displayTermsOfUse = false;
    },
    openPrivacyPolicy() {
      this.displayPrivacyPolicy = true;
    },
    closePrivacyPolicy() {
      this.displayPrivacyPolicy = false;
    }
  }
};
</script>
