<script setup lang="ts">
// Здесь можно оставить пустым или добавить импорты при необходимости
</script>

<template>
  <div class="glav_cont">
    <div class="left">
      <LeftPanel />
    </div>
    <div class="right">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.glav_cont {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.left {
  height: 100%;
  width: 7%;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
}
</style>