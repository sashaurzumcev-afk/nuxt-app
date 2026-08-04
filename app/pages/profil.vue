<template>
  <div class="divi">
    <div class="mini_divi">
      <div class="avatar">
        <span>Your face </span><div class="avatar_mini"></div>
      </div>
      <div class="name">
        <span>Name:</span><div class="name_mini"></div>
      </div>
      <div class="statys">
        <span>Statys:</span><div class="statys_mini"></div>
      </div>
      <div class="date">
        <span>Date:</span><div class="date_mini"></div>
      </div>
      <NuxtLink to="/setting" class="profil"exact-active-class="active-link">
      <div class="profil_mini">Edit</div></NuxtLink>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
    borde: 2px solid white;
    width: 100%;
    height: 88%;
    @include flex;
}
.mini_divi{
    width: 90%;
    height: 100%;
}
.avatar{
  @include bigi3;
}
.avatar span{
  @include span-setting;
}
.avatar_mini{
  border: var(--border-profil);
  border-radius: 999px;
  width: 200px;
  height: 200px;
}

.name{
  @include bigi3;
  height: 19% !important;
}
.name span{
  @include span-setting;
}
.name_mini{
  @include mini3;
}
.statys{
  @include bigi3;
  height: 19% !important;
}
.statys span{
  @include span-setting;
}
.statys_mini{
  @include mini3;
}
.date{
  @include bigi3;
  height: 19% !important;
}
.date span{
  @include span-setting;
}
.date_mini{
  width: 10% !important;
  height: 25% !important;
  @include mini3;
}
.profil{
@include flex;
height: 19%;
text-decoration: none;
color: black;
}
.profil_mini{
    border-radius: 25px;
    width: 25%;
    height: 50%;
    background-color: var(--reset-background-color);
    box-shadow: var(--reset-box-shadow);
    @include flex;
    font-size: 30px;
    font-weight: 600;
}
.profil_mini:hover{
  background-color: var(--reset-hover-bg);
  border: var(--border);
  box-shadow: var(--reset-hover-box-shadow);
}
</style>