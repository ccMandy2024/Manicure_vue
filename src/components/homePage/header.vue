<template>
  <div class="header">
    <img src="../../assets/images/logoName.png" class="logo" />

    <div class="nav-buttons">
      <button v-for="(item, index) in navItems" :key="index" class="button">
        {{ item }}
      </button>
    </div>

    <button class="login_button">登入 / 註冊</button>
  </div>
</template>

<script lang="ts" setup>
const navItems = ["店家導覽", "預約表單", "常見問題"];
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;

  .logo {
    height: 50px;
  }

  .nav-buttons {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 30px;

    .button {
      padding: 12px 16px;
      border: 0;
      border-radius: 20px;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .login_button {
    padding: 12px 16px;
    border: 0;
    background-color: #e2cfcf;
    border-radius: 20px;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
