<template>
<div>
  <el-select v-model="category" @change="$emit('choose', category)" placeholder="Select">
    <el-option
        v-for="item in typesList"
        :key="item.id"
        :label="item.name"
        :value="item.id"
    >
    </el-option>
  </el-select>
</div>
</template>

<script>
import 'element-plus/dist/index.css'

import {ElSelect, ElOption} from "element-plus" ;
export default {
  name: "select",
  props: {
    'types-list': Array
  },
  data() {
    return{
      category: null
    }
  },
  components: {
    ElSelect,
    ElOption
  }
}
</script>

<style scoped>
    .el-select .el-select-dropdown__item::v-deep  .selected{
      color: #e63946;
    }

</style>