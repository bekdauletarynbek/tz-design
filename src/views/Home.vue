<template>
  <div class="home">
    <header-t/>
    <div class="body">
      <div class="body-left">
        <select-t :items="items"></select-t>
      </div>
      <div class="body-right">

      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import headerT from "@/components/header";
import selectT from "@/components/select";
export default {
  name: 'Home',
  data() {
    return {
      items: [

      ]
    }
  },
  components: {
    headerT,
    selectT
  }
}
</script>
