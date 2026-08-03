<template>
  <div class="divi">
    <div class="mini_divi">
      <div class="up">
        <div class="name"><span>Title:</span><input type="text"></div>
        <div class="opis"><span>Description:</span><input type="text"></div>
        <div class="foto"><span>Image:</span><div class="foto_img"></div></div>
        <div class="video"><span>Video:</span><div class="video_video"></div></div>
        <div class="category"><span>Category:</span><div class="category_game"><span>game</span></div><div class="category_programs"><span>programs</span></div><div class="category_achivment"><span>achivment</span></div></div>
        <div class="complexity"><span>Complexity:</span><div class="complexity_easy"><span>easy</span></div><div class="complexity_middle"><span>middle</span></div><div class="complexity_hard"><span>hard</span></div></div>
      </div>

      <div class="down">
        <div class="save">
          <div class="save_button">Publick</div>
        </div>
        <div class="opyb">
          <div class="opyb_button">Save History</div>
        </div>
        <div class="nazad">
          <div class="nazad_button">Back</div>
        </div>
      </div>
      
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

.up{
  width: 100%;
  height: 90%;
}
.name{
  width: 100%;
  height: calc(100%/6);
  display: flex;
  align-items: center;
  gap: 20px;
}
.name span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
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
  display: flex;
  align-items: center;
  gap: 20px;
}
.opis span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
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
  display: flex;
  align-items: center;
  gap: 15px;
}
.foto span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.foto_img{
   border: 1px solid blue;
   height: 150px;
   width: 150px;
}
.video{
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  gap: 15px;
}
.video span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.video_video{
   border: 1px solid blue;
   height: 150px;
   width: 250px;
}
.category{
    width: 100%;
    height: calc(27%/2);
    display: flex;
    align-items: center;
    gap: 15px;
}
.category span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.category_game{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(101, 122, 115);
}
.category_programs{
  font-size: 25px;
  width: 9%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(101, 122, 115);
}
.category_achivment{
  font-size: 25px;
  width: 9%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(101, 122, 115);
}
.complexity{
    width: 100%;
    height: calc(27%/2);
    display: flex;
    align-items: center;
    gap: 15px;
}
.complexity span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.complexity_easy{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(101, 122, 115);
}
.complexity_middle{
  font-size: 25px;
  width: 9%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(101, 122, 115);
}
.complexity_hard{
  font-size: 25px;
  width: 9%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(101, 122, 115);
}


.down{
  width: 100%;
  height: 10%;
  display: flex;
}
.save{
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.save_button{
    border-radius: 25px;
    width: 45%;
    height: 60%;
    background-color: var(--save-background-color);
    box-shadow: var(--save-box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
}
.save_button:hover{
  background-color: var(--save-hover-bg);
  box-shadow: var(--save-hover-box-shadow);
  border: var(--border);
}
.opyb{
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.opyb_button{
    border-radius: 25px;
    width: 45%;
    height: 60%;
    background-color: var(--reset-background-color);
    box-shadow: var(--reset-box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
}
.opyb_button:hover{
  background-color: var(--reset-hover-bg);
  border: var(--border);
  box-shadow: var(--reset-hover-box-shadow);
}
.nazad{
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nazad_button{
  border-radius: 25px;
    width: 80%;
    height: 60%;
    background-color: var(--reset-background-color);
    box-shadow: var(--reset-box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
}
.nazad_button:hover{
  background-color: var(--reset-hover-bg);
  border: var(--border);
  box-shadow: var(--reset-hover-box-shadow);
}


</style>