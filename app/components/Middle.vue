<template>
  <div class="divi">
    <div class="mini_divi">
        <span>Добро пожаловать на Siriosly Guides! </span><br>
        <span>Гайды, которые действительно работают. Игры, программы, достижения — каждую тему до мелочей. Выбирай раздел слева и прокачивай навыки сейчас. Приятного изучения!</span>
    </div>
  </div>
</template>
<style scoped>
.divi{
    width: 100%;
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mini_divi{
    width: 90%;
    height: 100%;
    font-size: 70px;
    text-align: center;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(2, 255, 255);
    text-shadow:var(--text-shadow);
    font-weight: 600;
}
@media (max-width: 1000px) {
  .divi {
    padding: 8px 12px;
    line-height: 20px;
  }
  .mini_divi{
    height: 50%;
    align-items: center;
    justify-content: center;
  }
  span {
    font-size: 14px;
    font-weight: 600;
  }
}
</style>