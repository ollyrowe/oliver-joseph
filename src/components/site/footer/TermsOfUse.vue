<template>
  <div :class="{ modal: true, 'is-active': open }">
    <div class="modal-background" @click="onClose" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Terms of Use</p>
        <button class="delete" @click="onClose" aria-label="close" />
      </header>
      <section class="modal-card-body">
        <div class="content">
          <p class="subtitle">Website Usage</p>
          <p>
            If you continue to browse and use this website you are agreeing to
            comply with and be bound by the following terms and conditions of
            use, which together with our privacy policy govern Oliver Joseph's
            relationship with you in relation to this website.
          </p>
          <p>
            The use of this website is subject to the following terms of use:
          </p>
          <ul>
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </li>
            <li>
              From time to time this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </li>
          </ul>
          <p>
            Your use of this website and any dispute arising out of such use of
            the website is subject to the laws of England and Wales.
          </p>
          <p class="subtitle">Copyright Notice</p>
          <p>
            This website and its content is copyright of “Oliver Joseph”. All
            rights reserved.
          </p>
          <p>
            Any redistribution or reproduction of part or all of the contents in
            any form is prohibited other than the following:
          </p>
          <ul>
            <li>
              You may print or download to a local hard disk extracts for your
              personal and non-commercial use only
            </li>
            <li>
              You may copy the content to individual third parties for their
              personal use, but only if you acknowledge the website as the
              source of the material
            </li>
          </ul>
          <p>
            You may not, except with our express written permission, distribute
            or commercially exploit the content. Nor may you transmit it or
            store it in any other website or other form of electronic retrieval
            system.
          </p>
          <p class="subtitle">Website Disclaimer</p>
          <p>
            The information contained in this website is for general information
            purposes only. The information is provided by "Oliver Joseph" and
            whilst we endeavour to keep the information up-to-date and correct,
            we make no representations or warranties of any kind, express or
            implied, about the completeness, accuracy, reliability, suitability
            or availability with respect to the website or the information,
            products, services, or related graphics contained on the website for
            any purpose. Any reliance you place on such information is therefore
            strictly at your own risk.
          </p>
          <p>
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of or in connection with the use of this website.
          </p>
          <p>
            Through this website you are able to link to other websites which
            are not under the control of "Oliver Joseph". We have no control
            over the nature, content and availability of those sites. The
            inclusion of any links does not necessarily imply a recommendation
            or endorse the views expressed within them.
          </p>
          <p>
            Every effort is made to keep the website up and running smoothly.
            However, "Oliver Joseph" takes no responsibility for and will not be
            liable for the website being temporarily unavailable due to
            technical issues beyond our control.
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
  name: "TermsOfUse",
  props: {
    open: Boolean,
    onClose: Function,
  },
};
</script>
