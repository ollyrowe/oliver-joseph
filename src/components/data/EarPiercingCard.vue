<template>
  <article class="message container p-2">
    <div class="message-header header">
      <p class="ear-piercing-text">Ear Piercing</p>
      <p class="price-text">£36</p>
    </div>
    <div class="list-container has-text-light pt-0 p-1 pb-3">
      <p>Price includes:</p>
      <ul class="px-4">
        <li class="list-item">One pair of earrings</li>
        <li class="list-item">Aftercare lotion &#38; advice leaflet</li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: "EarPiercingCard",
};
</script>

<style lang="scss" scoped>
.container {
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  background-color: #4a6741 !important;
}

.header {
  display: flex;
  flex-direction: column;
  font-size: larger;
  margin-bottom: 0px;
  background-color: #4a6741 !important;
}

.ear-piercing-text {
  font-size: larger;
  margin-bottom: 10px;
}

.price-text {
  font-size: large;
}

.list-container {
  text-align: center;
  font-weight: 500;
  font-style: italic;
}

.list-item {
  width: fit-content;
  margin: auto;
  margin-top: 12px;
  font-weight: 400;
}

.list-item {
  &:before {
    display: block;
    content: "";
    width: 70%;
    height: 1px;
    background: white;
    margin: auto;
    margin-bottom: 8px;
  }
}
</style>
