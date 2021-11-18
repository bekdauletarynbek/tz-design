<template>
  <div class="general">
<div class="dots">
  <p>...................</p>
  <p>...................</p>
  <p>...................</p>
  <p>...................</p>
  <p>...................</p>
  <div class="text"><slot ></slot></div>

</div>

  </div>
</template>

<script>
export default {
  name: "dots"
}
</script>

<style lang="scss" scoped>
.general {

  .dots {
    position: relative;
    p {
      display: flex;
      align-items: center;
      color: #e63946;
      font-size: 40px;
      letter-spacing: 13px;
      height: 20px;
      user-select: none;
      padding: 0;
      margin: 0;
    }

    .text {
      position: absolute;
      font-weight: 500;
      background-color: white;
      font-size: 24px;
      text-align: left;
      top: 60px;
      right: -50px;
      width: 400px;
      white-space: pre-wrap;

    }
  }

}

@media (max-width: 425px) {
  .general{
    .dots{
      padding: 0 10px;
      .text{
        right: 20px;
      }
    }
  }
}
</style>