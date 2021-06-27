<template>
  <div>
    <div
      class="has-background-white px-3 pb-3 mx-5 is-paddingless-mobile is-marginless-mobile"
    >
      <b-image
        :src="require('@/assets/headers/careers-header.jpg')"
        alt="Careers & Vacancies Header"
      />
    </div>
    <div class="px-5 pb-4">
      <div class="px-5 pb-4 is-paddingless-mobile">
        <div class="title is-size-4 my-4">Careers & Vacancies</div>
        <b-message
          title="Hair Stylist Required"
          :closable="false"
          type="is-grey-dark"
        >
          <div class="content">
            We are looking for an experienced stylist, on either an employed or
            self-employed basis, who can:
            <ul>
              <li>Demonstrate high standards in personal presentation</li>
              <li>Provide a thorough consultation process with clientele</li>
              <li>
                Communicate effectively and professionally with both clients and
                fellow team members
              </li>
              <li>
                Demonstrate confidence in providing a comprehensive range of
                classic and creative colour and cutting services
              </li>
              <li>
                Provide evidence of 12 months salon-floor experience or a clear
                aptitude for working within a salon environment
              </li>
            </ul>
            Minimum qualifications required:
            <ul>
              <li>NVQ Level 2 or equivalent</li>
            </ul>
            In return, we offer:
            <ul>
              <li>Great pay opportunities based on experience and ability</li>
              <li>Discounts on both products and services</li>
              <li>Flexible working hours</li>
            </ul>
            For more information, contact us via:
            <ul>
              <li>Salon Telephone: 01761 416999</li>
              <li>Mobile: 07936142317</li>
              <li>Email: oliverjosephmsn@aol.com</li>
            </ul>
          </div>
        </b-message>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareersAndVacancies"
};
</script>
