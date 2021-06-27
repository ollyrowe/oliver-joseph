<template>
  <div :class="{ modal: true, 'is-active': open }">
    <div class="modal-background" @click="onClose" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Privacy & Cookie Policy</p>
        <button class="delete" @click="onClose" aria-label="close" />
      </header>
      <section class="modal-card-body">
        <div class="content">
          <p class="subtitle">Google Analytics Cookies</p>
          <p>
            We use cookies on our site for Google Analytics. Google Analytics is
            a web analytics tool that helps website owners understand how
            visitors engage with their website. Google Analytics customers can
            view a variety of reports about how visitors interact with their
            website so that they can improve it. Like many services, Google
            Analytics uses first-party cookies to track visitor interactions as
            in our case, where they are used to collect information about how
            visitors use our site. We then use the information to compile
            reports and to help us improve our site. Google Analytics collects
            information anonymously. It reports website trends without
            identifying individual visitors.
          </p>
          <p class="subtitle">Refusing or Deleting Cookies</p>
          <p>
            You may refuse or delete cookies by activating the setting on your
            browser which allows you to refuse or delete the setting of cookies.
            However, if you select this setting you may be unable to access
            certain parts of our site.
          </p>
          <p>
            You may opt out of Google Analytics without affecting how you visit
            our site - for more information on opting out of being tracked by
            Google Analytics across all websites you use, visit this Google
            page.
          </p>
        </div>
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button is-grey-dark" @click="onClose">Dismiss</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
  props: {
    open: Boolean,
    onClose: Function
  }
};
</script>
