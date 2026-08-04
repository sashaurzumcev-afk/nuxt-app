<template>
  <div class="divi">
    <div class="mini_divi">
      <div class="up">
        <div class="name"><span>Title:</span><input type="text"></div>
        <div class="opis"><span>Description:</span><input type="text"></div>
        <div class="foto"><span>Image:</span><div class="foto_img"></div></div>
        <div class="video"><span>Video:</span><div class="video_video"></div></div>
        <div class="category"><span>Category:</span><div class="category_game"><span class="boxshadow">game</span></div><div class="category_programs"><span class="boxshadow">programs</span></div><div class="category_achivment"><span class="boxshadow">achivment</span></div></div>
        <div class="complexity"><span>Complexity:</span><div class="complexity_easy"><span class="boxshadow">easy</span></div><div class="complexity_middle"><span class="boxshadow">mid</span></div><div class="complexity_hard"><span class="boxshadow">hard</span></div></div>
      </div>

      <div class="down">
        <div class="save">
          <div class="save_button boxshadow" @click=""><span>Publick</span></div>
        </div>
        <div class="opyb">
          <div class="opyb_button boxshadow">Save History</div>
        </div>
        <div class="nazad">
          <div class="nazad_button boxshadow">Back</div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '~/assets/mixins' as *;
.boxshadow{
  text-shadow: none !important;
}
.divi{
    width: 100%;
    height: 88%;
    @include flex;
}
.mini_divi{
    width: 90%;
    height: 100%;
}

.up{
  width: 100%;
  height: 90%;
}
.name{
  width: 100%;
  height: calc(100%/6);
  display: var(--flex);
  align-items: var(--centre);
  gap: 20px;
}
.name span{
  @include span-setting;
}
.name input{
  font-size: 25px;
  width: 40%;
  height: 45%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
}
.opis{
  width: 100%;
  height: calc(100%/6);
  display: var(--flex);
  align-items: var(--centre);
  gap: 20px;
}
.opis span{
  @include span-setting;
}
.opis input{
  font-size: 25px;
  width: 55%;
  height: 45%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
}
.foto{
  width: 100%;
  height: 20%;
  display: var(--flex);
  align-items: var(--centre);
  gap: 15px;
}
.foto span{
  @include span-setting;
}
.foto_img{
   border: 1px solid blue;
   height: 150px;
   width: 150px;
}
.video{
  width: 100%;
  height: 20%;
  display: var(--flex);
  align-items: var(--centre);
  gap: 15px;
}
.video span{
  @include span-setting;
}
.video_video{
   border: 1px solid blue;
   height: 150px;
   width: 250px;
}
.category{
    width: 100%;
    height: calc(27%/2);
    display: var(--flex);
  align-items: var(--centre);
    gap: 15px;
}
.category span{
  @include span-setting;
}
.category_game{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: var(--background-color-setting-create);
}
.category_programs{
  font-size: 25px;
  width: 9%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
 @include flex;
  background-color: var(--background-color-setting-create);
}
.category_achivment{
  font-size: 25px;
  width: 9%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: var(--background-color-setting-create);
}
.complexity{
  width: 100%;
  height: calc(27%/2);
  display: var(--flex);
  align-items: var(--centre);
  gap: 15px;
}
.complexity span{
  @include span-setting;
}
.complexity_easy{
  @include create-complexity;
}
.complexity_middle{
  @include create-complexity;
}
.complexity_hard{
  @include create-complexity;
}


.down{
  width: 100%;
  height: 10%;
  display: flex;
}
.save{
  width: 45%;
  @include flex;
}
.save_button{
    @include create-button;
    background-color: var(--save-background-color);
    box-shadow: var(--save-box-shadow);
}
.save_button:hover{
  background-color: var(--save-hover-bg);
  box-shadow: var(--save-hover-box-shadow);
  border: var(--border);
}
.opyb{
  width: 45%;
  @include flex;
}
.opyb_button{
    @include create-button;
    background-color: var(--reset-background-color);
    box-shadow: var(--reset-box-shadow);
}
.opyb_button:hover{
  background-color: var(--reset-hover-bg);
  border: var(--border);
  box-shadow: var(--reset-hover-box-shadow);
}
.nazad{
  width: 10%;
  @include flex;
}
.nazad_button{
  @include create-button;
  background-color: var(--reset-background-color);
  box-shadow: var(--reset-box-shadow);
}
.nazad_button:hover{
  background-color: var(--reset-hover-bg);
  border: var(--border);
  box-shadow: var(--reset-hover-box-shadow);
}


</style>