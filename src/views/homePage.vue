<template>
  <div class="homePage">
    <Header />
    <div class="banner"><img :src="banner" /></div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/homePage/header.vue";
import banner from "@/assets/images/banner.png";
</script>
<style lang="scss" scoped>
.homePage {
  .banner {
    height: 400px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover; // 讓圖片填滿區塊且不變形
    }
  }
}
</style>
