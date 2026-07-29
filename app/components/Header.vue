<template>
<header class="divi">
    <div class="create">
        <div class="create_mini"><SvgoCreate />Create</div>
    </div>
    <div class="yved">
        <div class="yved_mini"><SvgoBell />Notify</div>
    </div>
    <div class="izbr">
        <div class="izbr_mini"><SvgoStar />Favourite</div>
    </div>
    <div class="search">
        <div class="search_mini"><input type="text" placeholder="Search"><SvgoLypa /></div>
    </div>
    <div class="history">
        <div class="history_mini"><SvgoOclock />History</div>
    </div>
    <div class="profil">
        <div class="profil_mini"><SvgoProfil />Profil</div>
    </div>
</header>
</template>

<style scoped>
.divi{
    borde: 2px solid blue;
    height: 9%;
    display: flex;
}


.create{
    borde: 1px solid red;
    height: 100%;
    width: calc(100%/6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
}
.create_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: rgb(146, 86, 219);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: 0px 0px 10px 2px rgb(138, 42, 255);
}
.create_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(115, 0, 255);
    background-color: rgb(173, 105, 255);
    border: 1px solid white;
}


.yved{
    borde: 1px solid greenyellow;
    height: 100%;
    width: calc(100%/6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);
}
.yved_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: rgb(219, 166, 86);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: 0px 0px 10px 2px #ffaa2a;
}
.yved_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(255, 153, 0);
    background-color: rgb(254, 216, 0);
    border: 1px solid white;
}


.izbr{
    borde: 1px solid red;
    height: 100%;
    width: calc(100%/6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);
}
.izbr_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: rgb(219, 86, 86);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: 0px 0px 10px 2px rgb(211, 42, 86);
}
.izbr_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(188, 0, 86);
    background-color: rgb(246, 105, 86);
    border: 1px solid white;
}


.search{
    borde: 1px solid red;
    height: 100%;
    width: calc(100%/6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);
}
.search_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: rgb(86, 219, 208);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: 0px 0px 10px 2px rgb(78, 155, 208);
}
.search_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(56, 139, 255);
    background-color: rgb(110, 255, 243);
    border: 1px solid white;
}
.search_mini input{
    width: 95%;
    height: 80%;
    border: none;
    border-radius: 10px;
}
.search_mini ::placeholder{
    color: rgb(37, 114, 108);
    font-weight: 600;
    font-size: 19px;
}



.history{
    borde: 1px solid greenyellow;
    height: 100%;
    width: calc(100%/6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgb(50, 38, 66);
    border-left: 2px solid rgb(50, 38, 66);
}
.history_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: rgb(86, 110, 219);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: 0px 0px 10px 2px rgb(78, 66, 219);
}
.history_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(55, 24, 219);
    background-color: rgb(122, 147, 255);
    border: 1px solid white;
}


.profil{
    borde: 1px solid greenyellow;
    height: 100%;
    width: calc(100%/6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px solid rgb(50, 38, 66);
}
.profil_mini{
    borde: 1px solid blue;
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: rgb(102, 219, 86);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: 0px 0px 10px 2px rgb(94, 175, 86);
}
.profil_mini:hover{
    box-shadow: 0px 0px 15px 13px rgb(71, 131, 86);
    background-color: rgb(138, 254, 86);
    border: 1px solid white;
}


</style>

<script>

</script>