<template>
  <div class="homePage">
    <Header />
    <div class="banner"><img :src="banner" /></div>
    <div class="introduction">美甲款式 Nail Art Introduction</div>
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/homePage/header.vue";
import banner from "@/assets/images/banner.png";
</script>
<style lang="scss" scoped>
.homePage {
  display: flex;
  flex-direction: column;

  .banner {
    height: 400px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .introduction {
    font-size: 24px;
    margin: 20px;
    text-align: center;
    letter-spacing: 10px;
  }
}
</style>
