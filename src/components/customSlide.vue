<template>
  {{images}}
  <agile>
        <div v-for="(image, i) in images" :key="image">
          <img  class="slide" :src="image" :alt="image + i">
        </div>
    <template v-slot:prevButton>
      <button>
        Prev
      </button>
    </template>
    <template  v-slot:nextButton>
      <button>
        Next
      </button>
    </template>
  </agile>
</template>

<script>


import {VueAgile} from "vue-agile";

export default {
  name: "customSlide",
  props: {
    'images': Array,
  },
  components: {
    agile: VueAgile
  },
  mounted() {
  }
}
</script>

<style scoped>
@import "~vue-agile/dist/VueAgile.css";
.agile{
  max-width: 800px;
}

img{
  width: 800px;
}
</style>