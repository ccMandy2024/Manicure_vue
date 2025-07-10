<template>
  <div class="header">
    <img src="../../assets/images/logoName.png" class="logo" />
    <div>裡面四個按鈕</div>
    <button class="button">登入 / 註冊</button>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .logo {
    height: 50px;
  }
}
</style>
