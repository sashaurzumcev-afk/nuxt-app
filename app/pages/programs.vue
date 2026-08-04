<template>
  <div class="divi">
    <NuxtLink to="/" class="python"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
  </div>
</template>
<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
  margin-left: calc(23px/2);
    borde: 2px solid white;
    width: 100%;
    height: 88%;
    @include flex;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(3, 1fr);
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
.python{
    borde: 2px solid red;
    width: 90%;
    height: 100%;
    background-image: url(/image/питон.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

@media (max-width: 1000px){
  .divi{
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>