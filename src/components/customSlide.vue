<template>
  <div class="splide custom">
    <div class="splide__arrows">
      <div class="splide__arrow splide__arrow--prev">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
              d="M388.43 241.95L151.6 5.8a19.85 19.85 0 00-28.03 28.1L346.3 256 123.57 478.1a19.84 19.84 0 1028.04 28.1l236.81-236.15a19.82 19.82 0 000-28.1z"></path>
        </svg>
      </div>
      <div class="splide__arrow splide__arrow--next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
              d="M388.43 241.95L151.6 5.8a19.85 19.85 0 00-28.03 28.1L346.3 256 123.57 478.1a19.84 19.84 0 1028.04 28.1l236.81-236.15a19.82 19.82 0 000-28.1z"></path>
        </svg>
      </div>
    </div>
    <div class="splide__track" ref="custom-track">
      <ul class="splide__list">
        <div class="splide__slide"  v-for="(image, i) in images" :key="image">
        <img  :src="image" :alt="image + i"/>
        </div>
      </ul>
    </div>
  </div>
  <span class="pagination">
  </span>
<!--  <span class="counter">{{i}}/{{8}}</span>-->
</template>

<script>

import Splide from '@splidejs/splide';


export default {
  name: "customSlide",
  props: {
    'images': Array,
  },
  data() {
    return{
      i: 1,
      length: null
    }
  },
  computed:{
    numberOfSlide(){
      console.log(this.$refs["custom-track"])
      return 1
    }
  },
  components: {
  },
  updated() {
    new Splide('.splide', {
      width: 900,
      height: 500,
      focus: 'left',
      pagination: false,
      rewind: false,
      perMove:1,
      perPage:1,
      lazyLoad: true,
      breakpoints: {
        768: {
          width: 400
        },
        425: {
          width: 300
        }
      }
    }).mount()
    this.length = this.images.length;
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 900px;
  height: 500px;
}

.custom{
  position: relative;
  z-index: 100;
}
.pagination{
  position: absolute;
  right: -100px;
  top: 50%;
  opacity: 0.5;
  z-index: -5000;
  width: calc(100vw - 1120px);
  background-color: #42b983;
  height: 100vh;
}

.counter{
  position: absolute;
  top: 520px;
  z-index: -5000;
  right: 50px;
}
.splide__arrows{
  position: absolute;
  bottom: 25px;
  right: 80px;
  display: flex;
  svg{
    fill: white;
  }
}

.splide__arrow{
  background-color: #e32736;
  border-radius: 3px;
  font-size: 20px;
  padding: 5px 10px;
}

.splide__arrow--next{
  left: 1em !important;
  right: 2em;
}
.splide__arrow--prev{
  right: 5em !important;
  left: -2em;
}

@media (max-width: 768px) {

  img{
    width: auto;

  }
}
</style>