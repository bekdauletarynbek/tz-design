<template>
<div class="content">
  <custom-slide :images="item.images"></custom-slide>
  <p class="name">{{item.name}} - <span class="address">{{item.address}}</span></p>
  <p v-html="item.description" class="description"></p>
</div>
  <div></div>

</template>

<script>
import customSlide from '@/components/customSlide'
import {getItem as getComplex } from '../api/items'
export default {
  name: "Item",
  data() {
    return {
      item: {},
      i: null
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
  }
}
</script>

<style lang="scss" scoped>
.content{
  position: relative;
  .name{
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    margin-left: 15px;
    &:before{
      content: "\2022";
      color: red;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
    .address{
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .description{
    text-align: left;
    margin-right: 40px;
    white-space: pre-wrap;
  }
}

@media (max-width: 768px) {
  .content{
    padding: 0 100px;
  }
}
</style>