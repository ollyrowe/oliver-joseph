<template>
  <div class="has-background-grey-darker">
    <div
      class="container is-flex is-flex-grow-1 is-max-desktop is-justify-content-center"
    >
      <Logo />
      <div
        class="has-text-grey-light has-text-right is-hidden-mobile is-flex is-flex-grow-1 is-flex-direction-column p-2 pt-4 pr-3"
      >
        <div class="is-flex is-flex-direction-column is-flex-grow-1">
          <span class="is-size-7">Midsomer Norton, BA3 2DN</span>
        </div>
        <div class="is-flex is-justify-content-flex-end is-align-items-center">
          <div class="is-flex">
            <a
              class="mr-3 is-flex is-align-items-center"
              href="https://www.facebook.com/pages/Oliver-Joseph/1615539395334924"
            >
              <img
                src="../../../assets/icons/facebook-icon.png"
                alt="Oliver Joseph Facebook"
                class="mt-1"
              />
            </a>
            <img
              class="mr-3"
              src="../../../assets/icons/phone-icon.png"
              alt="Oliver Joseph Phone"
            />
          </div>
          <div class="is-size-3">07936 142317</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "AppBar",
  components: { Logo },
};
</script>
