<template>
  <div class="divi">
    <NuxtLink to="/myguidesfile/myguidesgame" class="game"exact-active-class="active-link">Game</NuxtLink>
    <NuxtLink to="/myguidesfile/myguidesprograms" class="programs"exact-active-class="active-link">Programs</NuxtLink>
    <NuxtLink to="/myguidesfile/myguidesachivment" class="achivment"exact-active-class="active-link">Achivment</NuxtLink>
  </div>
</template>
<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
    width: 100%;
    height: 88%;
    @include flex;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
}
.game{
    text-decoration: none;
    color: black;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--blue-background-color);
    @include flex;
    gap: 10px;
    font-size: 50px;
    font-weight: 600;
    box-shadow:var(--blue-box-shadow);
}
.programs{
  text-decoration: none;
    color: black;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--red-background-color);
    @include flex;
    gap: 10px;
    font-size: 50px;
    font-weight: 600;
    box-shadow: var(--red-box-shadow);
}
.achivment{
    text-decoration: none;
    color: black;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--yellow-background-color);
    @include flex;
    gap: 10px;
    font-size: 50px;
    font-weight: 600;
    box-shadow: var(--yellow-box-shadow);
}

@media (max-width: 1000px){
  .divi{
    width: 321px;
    padding-left: 10px;
  }
  .game{
    height: 200px;
    font-size: 15px;
  }
  .programs{
    height: 200px;
    font-size: 15px;
  }
  .achivment{
    height: 200px;
    font-size: 15px;
  }
}
</style>