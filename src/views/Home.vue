<template>
  <div class="home">

    <dots></dots>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import dots from "@/components/dots";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    dots
  }
}
</script>
