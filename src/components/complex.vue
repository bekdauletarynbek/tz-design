<template>
<router-link :to="{name: 'item', params: {id: `${complex.creator}-${complex.id}`}}">{{complex.name}}</router-link>
</template>

<script>
export default {
  name: "complex",
  props: {
    'complex': Object
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  background-color: #ebedf7;
  color: #000001;
  padding: 20px 40px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
}
</style>