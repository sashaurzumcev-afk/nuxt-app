<template>
<div class="divi">
    <div class="home">
        <div class="home_mini">Home</div>
    </div>
    <div class="game">
        <div class="game_mini">Game</div>
    </div>
    <div class="programs">
        <div class="programs_mini">Programs</div>
    </div>
    <div class="achivment">
        <div class="achivment_mini">Achivment</div>
    </div>
    <div class="myguides">
        <div class="myguides_mini">MyGuides</div>
    </div>
    <div class="settings">
        <div class="settings_mini">Settings</div>
    </div>
</div>
</template>

<style scoped>
.divi{
    borde: 2px solid red;
    height: 100%;
    width: 100%;
    border-right: 2px solid rgb(50, 38, 66);
}


.home{
    borde: 1px solid red;
    height: calc(100%/6);;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);

}
.home_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: rgb(146, 86, 219);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0px 0px 10px 2px rgb(138, 42, 255);
}
.home_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(115, 0, 255);
    background-color: rgb(173, 105, 255);
    border: 1px solid white;
}


.game{
    borde: 1px solid red;
    height: calc(100%/6);;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);

}
.game_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: rgb(86, 110, 219);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0px 0px 10px 2px rgb(78, 66, 219);
}
.game_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(55, 24, 219);
    background-color: rgb(122, 147, 255);
    border: 1px solid white;
}


.programs{
    borde: 1px solid red;
    height: calc(100%/6);;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);

}
.programs_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: rgb(219, 86, 86);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0px 0px 10px 2px rgb(211, 42, 86);
}
.programs_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(188, 0, 86);
    background-color: rgb(246, 105, 86);
    border: 1px solid white;
}


.achivment{
    borde: 1px solid red;
    height: calc(100%/6);;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);

}
.achivment_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: rgb(219, 166, 86);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0px 0px 10px 2px #ffaa2a;
}
.achivment_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(255, 153, 0);
    background-color: rgb(254, 216, 0);
    border: 1px solid white;
}


.myguides{
    borde: 1px solid red;
    height: calc(100%/6);;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);

}
.myguides_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: rgb(102, 219, 86);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0px 0px 10px 2px rgb(94, 175, 86);
}
.myguides_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(71, 131, 86);
    background-color: rgb(138, 254, 86);
    border: 1px solid white;
}


.settings{
    borde: 1px solid red;
    height: calc(100%/6);;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);

}
.settings_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: rgb(86, 219, 208);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0px 0px 10px 2px rgb(78, 155, 208);
}
.settings_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(56, 139, 255);
    background-color: rgb(110, 255, 243);
    border: 1px solid white;
}
</style>

<script>

</script>