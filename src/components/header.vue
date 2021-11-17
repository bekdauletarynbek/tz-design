<template>
<div class="left-part-head">
  <h2>Галерея проектов</h2>
  <p>Сумма экономии расчитана в сравнении с суммой цен этого же перечня товаров по отдельности</p>
  <a href="#" class="button">Выбрать дизайн</a>
</div>
  <div class="right-part-head">
    <dots></dots>
    <p class="text-on-dots">Мы успешно завершили <span>более 450</span> ремонтов</p>
  </div>
</template>

<script>
import dots from "./dots";
export default {
  name: "header",
  components: {
    dots
  }
}
</script>

<style lang="scss" scoped>

</style>