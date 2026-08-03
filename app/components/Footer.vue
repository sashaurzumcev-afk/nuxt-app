<template>
  <div class="divi">
    <span>© 2025 Siriosly Guides. Все права защищены.</span>
  </div>
</template>

<style scoped>
.divi {
  height: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  color: rgb(0, 255, 255);
  text-shadow:var(--text-shadow);
  font-weight: 600;
}
@media (max-width: 1000px) {
  .divi {
    height: auto;
    padding: 8px 12px;
  }
  span {
    font-size: 10px;
    font-weight: 400;
  }
}
</style>