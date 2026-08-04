<template>
  <div class="divi">
    <div class="mini_divi">
        <span>Добро пожаловать на Siriosly Guides! </span><br>
        <span>Гайды, которые действительно работают. Игры, программы, достижения — каждую тему до мелочей. Выбирай раздел слева и прокачивай навыки сейчас. Приятного изучения!</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
    width: 100%;
    height: 88%;
    @include flex;
}
.mini_divi{
    width: 90%;
    height: 100%;
    font-size: 70px;
    text-align: var(--centre);
    font-weight: 600;
    padding-top: 10%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: var(--color);
    text-shadow:var(--text-shadow);
}
@media (max-width: 1000px) {
  .divi {
    padding: 8px 12px;
    line-height: 15px;
  }
  .mini_divi{
    height: 50%;
  }
  span {
    font-size: 14px;
  }
}
</style>