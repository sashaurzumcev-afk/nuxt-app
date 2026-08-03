<script setup lang="ts">
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
  display: var(--flex);
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
  display: var(--flex);
  flex-direction: column;
  background: var(--bg-primary);
}
@media (max-width: 1000px){
  .left {
  height: 100%;
  width: 60px;
}
}
</style>