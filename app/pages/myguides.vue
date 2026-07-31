<template>
  <div class="divi">
    <NuxtLink to="/myguidesfile/myguidesgame" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/myguidesfile/myguidesprograms" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/myguidesfile/myguidesachivment" class="mini_divi"exact-active-class="active-link"></NuxtLink>
  </div>
</template>
<style scoped>
.divi{
    borde: 2px solid white;
    width: 100%;
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
}
.mini_divi{
    borde: 2px solid red;
    width: 90%;
    height: 100%;
    background-image: url(/image/вопрос.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

</style>