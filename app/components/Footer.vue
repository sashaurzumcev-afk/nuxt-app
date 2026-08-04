<template>
  <div class="divi">
    <span>© 2025 Siriosly Guides. Все права защищены.</span>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi {
  height: 3%;
  @include flex;
}
span {
  @include span-setting;
  font-size: 17px !important;
}
@media (max-width: 1000px) {
  .divi {
    height: auto;
    padding: 8px 12px;
  }
  span {
    font-size: 10px !important;
    font-weight: 400;
  }
}
</style>