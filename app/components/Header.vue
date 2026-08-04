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
    @include bigi;
    border-right: var(--border-right);
}
.create_mini{
    @include mini;
    background-color: var(--purple-background-color);
    box-shadow: var(--purple-box-shadow);
}
.create_mini:hover{
    box-shadow: var(--purple-hover-box-shadow);
    background-color: var(--purple-hover-background-color);
    border: var(--border);
}


.yved{
    @include bigi;
    border-right: var(--border-right);
    border-left: var(--border-left);
}
.yved_mini{
    @include mini;
    background-color: var(--yellow-background-color);
    box-shadow:var(--yellow-box-shadow);
}
.yved_mini:hover{
    box-shadow: var(--yellow-hover-box-shadow);
    background-color: var(--yellow-hover-background-color);
    border: var(--border);
}


.izbr{
    @include bigi;
    border-right: var(--border-right);
    border-left: var(--border-left);
}
.izbr_mini{
    @include mini;
    background-color: var(--red-background-color);
    box-shadow: var(--red-box-shadow);
}
.izbr_mini:hover{
    box-shadow: var(--red-hover-box-shadow);
    background-color: var(--red-hover-background-color);
    border: var(--border);
}


.search{
    @include bigi;
    border-right: var(--border-right);
    border-left: var(--border-left);
}
.search_mini{
    width: 90% !important;
    @include mini;
    background-color: var(--blu-background-color);
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
    @include bigi;
    border-right: var(--border-right);
    border-left: var(--border-left);
}
.time_mini{
    @include mini;
    background-color: var(--blue-background-color);
    box-shadow: var(--blue-box-shadow);
}
.time_mini:hover{
    box-shadow: var(--blue-hover-box-shadow);
    background-color: var(--blue-hover-background-color);
    border: var(--border);
}


.profil{
    @include bigi;
    border-left: var(--border-left);
}
.profil_mini{
    @include mini;
    background-color: var(--green-background-color);
    box-shadow: var(--green-box-shadow);
}
.profil_mini:hover{
    box-shadow: var(--green-hover-box-shadow);
    background-color: var(--green-hover-background-color);
    border: var(--border);
}

@media (max-width: 1000px){
    .create_mini{
        @include media-header;
    }
    .yved_mini{
        @include media-header;
    }
    .izbr_mini{
        @include media-header;
    }
    .izbr_mini{
        @include media-header;
        font-size: 10px !important;
    }
    .search_mini{
        @include media-header;
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
        @include media-header;
    }
    .profil_mini{
        @include media-header;
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