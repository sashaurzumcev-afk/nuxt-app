<template>
  <div class="divi">
    <NuxtLink to="/favouritefile/favouritegame" class="game"exact-active-class="active-link">Game</NuxtLink>
    <NuxtLink to="/favouritefile/favouriteprograms" class="programs" exact-active-class="active-link">Programs</NuxtLink>
    <NuxtLink to="/favouritefile/favouriteachivment" class="achivment"exact-active-class="active-link">Achivment</NuxtLink>
  </div>
</template>
<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
  margin-left: calc(57px/2);
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
    @include notify-favourite;
    background-color: var(--blue-background-color);
    box-shadow:var(--blue-box-shadow);
}
.programs{
    @include notify-favourite;
    background-color: var(--red-background-color);
    box-shadow: var(--red-box-shadow);
}
.achivment{
    @include notify-favourite;
    background-color: var(--yellow-background-color);
    box-shadow: var(--yellow-box-shadow);
}

@media (max-width: 1000px){
  .divi{
    width: 321px;
    padding-left: 10px;
  }
  .game{
    @include media-notify;
  }
  .programs{
    @include media-notify;
  }
  .achivment{
    @include media-notify;
  }
}
</style>