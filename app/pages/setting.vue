<template>
  <div class="divi">
    <div class="mini_divi">

      <div class="up_mini_divi">
        <div class="swich_avatar">
          <div class="avatar"></div><div class="avatar_smen"><span>Change</span></div>
        </div>
        <div class="name"><span>Name:</span><input type="text"><div class="name_enter"><span>Enter</span></div></div>
        <div class="email"><span>Email:</span><input type="email"><div class="email_enter"> <span>Enter</span></div></div>
        <div class="password"><span>Password:</span><input type="password"><div class="password_enter"><span>Enter</span></div></div>
      </div>
      
      <div class="mid_mini_divi">
        <div class="font_size"><span>Font-size:</span><div class="font-size_10"><span>10</span></div><div class="font-size_15"><span>15</span></div><div class="font-size_20"><span>20</span></div></div>
        <div class="density"><span>Density:</span><div class="density_12"><span>12</span></div><div class="density_18"><span>18</span></div><div class="density_24"><span>24</span></div></div>
        <div class="on_of_notify"><span>Notify:</span><div class="notify_on"><span>On</span></div><div class="notify_off"><span>Off</span></div></div>
        <div class="language"><span>Language:</span><div class="Language_ru"><span>RU</span></div><div class="Language_en"><span>EN</span></div></div>
        </div>
     

      <div class="down_mini_divi">
        <div class="reset_settings"><span>Reset</span></div>
        <div class="save_settings"><span>Save</span></div>
      </div>
      
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
    width: 100%;
    height: 88%;
    @include flex;
}
.mini_divi{
    width: 90%;
    height: 100%;
    display: var(--flex);
    flex-direction: column;
}


.up_mini_divi{
  width: 100%;
  height: 43%;
}
.swich_avatar{
    width: 90%;
    height: 35%;
    margin-bottom: 25px;
   display: var(--flex);
  align-items: var(--centre);
    gap: 20px;
}
.avatar{
  box-shadow: var(--name-input-box-shadow);
  border: 1px solid blue;
  background-color: white;
  border-radius:60px;
  width: 120px;
  height: 120px;
}
.avatar_smen{
  font-size: 25px;
  width: 7%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);

}
.avatar_smen span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.name{
    width: 90%;
    height: 15%;
    margin-bottom: 25px;
    display: var(--flex);
  align-items: var(--centre);
    gap: 15px;
}
.name span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.name input{
  font-size: 25px;
  width: 20%;
  height: 80%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
}
.name_enter{
  font-size: 25px;
  width: 7%;
  height: 60%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.email{
    width: 90%;
    height: 15%;
    margin-bottom: 25px;
    display: var(--flex);
  align-items: var(--centre);
    gap: 15px;
}
.email span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.email input{
  font-size: 25px;
  width: 20%;
  height: 80%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
}
.email_enter{
  font-size: 25px;
  width: 7%;
  height: 60%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.password{
    width: 90%;
    height: 15%;
    display: var(--flex);
  align-items: var(--centre);
    gap: 15px;
}
.password span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.password input{
  font-size: 25px;
  width: 20%;
  height: 80%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
}
.password_enter{
  font-size: 25px;
  width: 7%;
  height: 60%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}


.mid_mini_divi{
  width: 100%;
  height: 43%;
}
.font_size{
    width: 90%;
    height: 25%;
    display: var(--flex);
  align-items: var(--centre);
    gap: 15px;
}
.font_size span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.font-size_10{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.font-size_15{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.font-size_20{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.density{
    width: 90%;
    height: 25%;
    display: flex;
    align-items: center;
    gap: 15px;
}
.density span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.density_12{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.density_18{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.density_24{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.on_of_notify{
    width: 90%;
    height: 25%;
    display: var(--flex);
  align-items: var(--centre);
    gap: 15px;
}
.on_of_notify span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.notify_on{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.notify_off{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.language{
    width: 90%;
    height: 25%;
    display: var(--flex);
  align-items: var(--centre);
    gap: 15px;
}
.language span{
  font-size: 25px;
  font-weight: 600;
  text-shadow:var(--text-shadow);
  color: rgb(0, 255, 255);
}
.Language_ru{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}
.Language_en{
  font-size: 25px;
  width: 5%;
  height: 30%;
  border: none;
  box-shadow: var(--name-input-box-shadow);
  border-radius: 17px;
  @include flex;
  background-color: rgb(101, 122, 115);
}


.down_mini_divi{
  width: 100%;
  height: 14%;
  justify-content: space-around;
  display: var(--flex);
  align-items: var(--centre);
}
.reset_settings{
    border-radius: 25px;
    width: 45%;
    height: 40%;
    background-color: var(--reset-background-color);
    box-shadow: var(--reset-box-shadow);
    @include flex;
    font-size: 30px;
    font-weight: 600;
}
.reset_settings:hover{
  background-color: var(--reset-hover-bg);
  border: var(--border);
  box-shadow: var(--reset-hover-box-shadow);
}
.save_settings{
    border-radius: 25px;
    width: 45%;
    height: 40%;
    background-color: var(--save-background-color);
    box-shadow: var(--save-box-shadow);
    @include flex;
    font-size: 30px;
    font-weight: 600;
}
.save_settings:hover{
  background-color: var(--save-hover-bg);
  box-shadow: var(--save-hover-box-shadow);
  border: var(--border);
}
@media (max-width: 1000px){
.language span{
  font-size: 20px;
}
.Language_ru{
  width: 40px;
}
.Language_en{
  width: 40px;
}

.on_of_notify span{
  font-size: 20px;
}
.notify_on{
  width: 40px;
}
.notify_off{
  width: 45px;
}

.density span{
  font-size: 20px;
}
.density_12{
  width: 40px;
}
.density_18{
  width: 40px;
}
.density_24{
  width: 40px;
}

.font_size span{
  font-size: 20px;
}
.font-size_10{
   width: 35px;
}
.font-size_15{
    width: 35px;
}
.font-size_20{
    width: 35px;
}

.password span{
  font-size: 20px;
}
.password input{
  width: 100px;
}
.password_enter{
  width: 70px;
}
.up_mini_divi{
  margin-bottom: 20px;
}

.email span{
  font-size: 20px;
}
.email input{
  width: 100px;
}
.email_enter{
  width: 70px;
}

.name span{
  font-size: 20px;
}
.name input{
  width: 100px;
}
.name_enter{
  width: 70px;
}
.swich_avatar{
    width: 90%;
    height: 35%;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
}
.avatar{
  margin-top: 10px;
  width: 90px;
  height: 90px;
}
.avatar_smen{
  width: 95px;
}
.avatar_smen span{
  font-size: 20px;
}
}
</style>