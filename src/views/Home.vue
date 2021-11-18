<template>
  <div class="home">
    <header-t/>
    <div class="body">
      <div class="body-left">
        <p class="type-remont">Тип ремонта</p>

        <select-t :types-list="typesList" @choose="goCategory"></select-t>

        <p class="result-text">Найдено {{complexes.length}} объекта</p>

        <div class="complexes">
          <complex :complex="complex" v-for="complex in complexes" :key="complex.id"></complex>
        </div>
      </div>
      <div class="body-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerT from "@/components/header";
import selectT from "@/components/select";
import complex from "@/components/complex";
import {
        getCategories as getTypesList,
        getItems as getComplexes
} from "../api/items";
export default {
  name: 'Home',
  data() {
    return {
      typesList: [

      ],
      complexes: [

      ]
    }
  },
  components: {
    headerT,
    selectT,
    complex
  },
  async mounted() {
    this.typesList = await getTypesList();
  },
  methods: {
    async goCategory(id) {
      console.log(id);
      this.complexes = await getComplexes(id);
    }
  }
}
</script>


<style lang="scss" scoped>
.complexes{
  margin-top: 30px;
}

.body{
  display: flex;
  margin-top: 20px;
  width: 100%;
  padding: 20px 0;
}

.body-left{
  padding: 0;
  margin-left: 40px;
  min-width: 400px;
  text-align: left;
  margin-bottom: 40px;
}
.body-right{
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.result-text{
  color: #aaa;
}

.type-remont{
  margin:0;
  padding: 10px 0;
}

@media (max-width: 768px) {
  .body{
    display: block;
  }
}
</style>
