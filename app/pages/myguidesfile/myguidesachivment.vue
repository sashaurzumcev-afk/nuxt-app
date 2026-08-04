<template>
  <div class="divi">
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
    <NuxtLink to="/" class="mini_divi"exact-active-class="active-link"></NuxtLink>
  </div>
</template>
<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
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
    width: 90%;
    height: 100%;
    background-image: url(/image/вопрос.jpg);
    background-position: var(--centre);
    background-size: cover;
    background-repeat: no-repeat;
}
@media (max-width: 1000px){
  .divi{
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
}
</style>