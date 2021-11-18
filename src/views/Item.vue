<template>
  <div></div>

<custom-slide :images="item.images"></custom-slide>
</template>

<script>
import customSlide from '@/components/customSlide'
import {getItem as getComplex } from '../api/items'
export default {
  name: "Item",
  data() {
    return {
      item: {}
    }
  },
  components: {
    customSlide
  },
  watch:{
    async $route(to, from) {
      if(to !== from) {
        this.item = await getComplex(this.$route.params.id.split('-').last());
      }
    }
  },
  async mounted() {
    this.item = await getComplex(this.$route.params.id.split('-').last());
    console.log(this.item)
  }
}
</script>

<style scoped>

</style>