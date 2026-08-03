<template>
<header class="divi">

    <div class="create">
        <NuxtLink to="/create" class="create_mini"exact-active-class="active-link"><SvgoCreate /><span>Create</span></NuxtLink>
    </div>

    <div class="yved">
        <NuxtLink to="/notify" class="yved_mini"exact-active-class="active-link"><SvgoBell />Notify</NuxtLink>
    </div>

    <div class="izbr">
        <NuxtLink to="/favourite"  class="izbr_mini"exact-active-class="active-link"><SvgoStar />Favourite</NuxtLink>
    </div>

    <div class="search">
        <div class="search_mini"><input type="text" placeholder="Search"><SvgoLypa /></div>
    </div>

    <div class="time">
        <div class="time_mini" @click="toggleTheme"><SvgoSun />Time</div>
    </div>

    <div class="profil">
        <NuxtLink to="profil"  class="profil_mini" exact-active-class="active-link"><SvgoProfil />Profil</NuxtLink>
    </div>
    
</header>
</template>

<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
    height: 9%;
    display: flex;
}


.create{
    height: 100%;
    width: calc(100%/6);
    @include flex;
    border-right: var(--border-right);

}
.create_mini{
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: var(--purple-background-color);
    @include flex;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: var(--purple-box-shadow);
    text-decoration: none;
    color: black;
}
.create_mini:hover{
    box-shadow: var(--purple-hover-box-shadow);
    background-color: var(--purple-hover-background-color);
    border: var(--border);
}


.yved{
    height: 100%;
    width: calc(100%/6);
    @include flex;
    border-right: var(--border-right);
    border-left: var(--border-left);
    text-decoration: none;
    color: black;
}
.yved_mini{
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: var(--yellow-background-color);
    @include flex;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow:var(--yellow-box-shadow);
    text-decoration: none;
    color: black;
}
.yved_mini:hover{
    box-shadow: var(--yellow-hover-box-shadow);
    background-color: var(--yellow-hover-background-color);
    border: var(--border);
}


.izbr{
    height: 100%;
    width: calc(100%/6);
    @include flex;
    border-right: var(--border-right);
    border-left: var(--border-left);
    text-decoration: none;
    color: black;
}
.izbr_mini{
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: var(--red-background-color);
    @include flex;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: var(--red-box-shadow);
    text-decoration: none;
    color: black;
}
.izbr_mini:hover{
    box-shadow: var(--red-hover-box-shadow);
    background-color: var(--red-hover-background-color);
    border: var(--border);
}


.search{
    height: 100%;
    width: calc(100%/6);
    @include flex;
    border-right: var(--border-right);
    border-left: var(--border-left);
}
.search_mini{
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--blu-background-color);
    @include flex;
    padding: 3px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: var(--blu-box-shadow);
}
.search_mini:hover{
    box-shadow: var(--blu-hover-box-shadow);
    background-color: var(--blu-hover-background-color);
    border: var(--border);
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}



.time{
    height: 100%;
    width: calc(100%/6);
    @include flex;
    border-right: var(--border-right);
    border-left: var(--border-left);
}
.time_mini{
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: var(--blue-background-color);
    @include flex;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: var(--blue-box-shadow);
}
.time_mini:hover{
    box-shadow: var(--blue-hover-box-shadow);
    background-color: var(--blue-hover-background-color);
    border: var(--border);
}


.profil{
    height: 100%;
    width: calc(100%/6);
    @include flex;
    border-left: var(--border-left);
    text-decoration: none;
    color: black;
}
.profil_mini{
    border-radius: 10px;
    height: 70%;
    width: 70%;
    background-color: var(--green-background-color);
    @include flex;
    gap: 10px;
    font-size: 25px;
    font-weight: 400;
    box-shadow: var(--green-box-shadow);
    text-decoration: none;
    color: black;
}
.profil_mini:hover{
    box-shadow: var(--green-hover-box-shadow);
    background-color: var(--green-hover-background-color);
    border: var(--border);
}

@media (max-width: 1000px){
    .create_mini{
        gap: 0px;
        font-size: 15px;
        font-weight: 600;
    }
    .yved_mini{
        gap: 0px;
        font-size: 15px;
        font-weight: 600;
    }
    .izbr_mini{
        gap: 0px;
        font-size: 15px;
        font-weight: 600;
    }
    .izbr_mini{
        gap: 0px;
        font-size: 10px;
        font-weight: 600;
    }
    .search_mini{
        gap: 0px;
        font-size: 15px;
        font-weight: 600;
    }
    .search_mini input{
        width: 40px;
    }
    .search_mini ::placeholder{
        font-weight: 600;
        font-size: 13px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .time_mini{
        gap: 0px;
        font-size: 15px;
        font-weight: 600;
    }
    .profil_mini{
        gap: 0px;
        font-size: 15px;
        font-weight: 600;
    }
}
</style>

<script setup>
import { useColorMode } from '#imports';

const colorMode = useColorMode()
const toggleTheme = ()=>{
    colorMode.preference = colorMode.value==='dark'
    ?'light'
    :'dark'
}
</script>