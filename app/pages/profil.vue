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
<style scoped>
.divi{
    borde: 2px solid white;
    width: 100%;
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mini_divi{
    width: 90%;
    height: 100%;
}
.avatar{
  width: 100%;
  height: 24%;
  display: flex;
  align-items: center;
  gap: 30px;
}
.avatar span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.avatar_mini{
  border: 1px solid greenyellow;
  border-radius: 999px;
  width: 200px;
  height: 200px;
}

.name{
  width: 100%;
  height: 19%;
  display: flex;
  align-items: center;
  gap: 30px;
}
.name span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.name_mini{
  border: 1px solid greenyellow;
  width: 15%;
  height: 55%;
  border-radius: 30px;
  background-color: white;
  box-shadow: var(--name-input-box-shadow);
}
.statys{
  width: 100%;
  height: 19%;
  display: flex;
  align-items: center;
  gap: 30px;
}
.statys span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.statys_mini{
  border: 1px solid greenyellow;
  width: 15%;
  height: 55%;
  border-radius: 30px;
  background-color: white;
  box-shadow: var(--name-input-box-shadow);
}
.date{
  width: 100%;
  height: 19%;
  display: flex;
  align-items: center;
  gap: 30px;
}
.date span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.date_mini{
  width: 10%;
  height: 25%;
  border-radius: 30px;
  background-color: white;
  box-shadow: var(--name-input-box-shadow);
}
.profil{
display: flex;
align-items: center;
justify-content: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
}
.profil_mini:hover{
  background-color: var(--reset-hover-bg);
  border: var(--border);
  box-shadow: var(--reset-hover-box-shadow);
}
</style>