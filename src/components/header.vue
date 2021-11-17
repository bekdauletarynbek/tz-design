<template>
  <div class="head">
<div class="left-part-head">
  <p class="h2">Галерея проектов</p>
  <p>Сумма экономии расчитана в сравнении с суммой цен этого же перечня товаров по отдельности</p>
  <a href="#" class="button">Выбрать дизайн</a>
</div>
  <div class="right-part-head">
    <dots>
      <p class="text-on-dots" style="margin: 1px; padding: 0;">Мы успешно завершили уже <span style="color: #e63946">более 450</span> ремонтов</p>
    </dots>
  </div>
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
.head{
  font-family: 'Montserrat', sans-serif;
  display: flex;
  padding: 20px 40px;
  flex-grow: 1;
  .left-part-head{
    width: 400px;
    text-align: left;
    .h2{
      font-size: 40px;
      padding: 0;
      margin: 0;
      font-weight: 600;
    }
    p{
      text-align: left;
    }
    .button{
      display: inline-block;;
      margin-top:20px;
      border: 3px solid #e63946;
      padding: 20px 40px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;
      color: #9b2226;
      transition: all .3s;
      &:hover{
      background-color: #e63946;
      color: white;
    }
    }
  }
  .right-part-head{
    display: flex;
    margin-left: auto;
  }
}
</style>