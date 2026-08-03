<template>
<div class="divi">

    <div class="home">
        <NuxtLink to="/"  class="home_mini"exact-active-class="active-link">Home</NuxtLink>
    </div>

    <div class="game">
        <NuxtLink to="/game"  class="game_mini"exact-active-class="active-link">Game</NuxtLink>
    </div>

    <div class="programs">
        <NuxtLink to="/programs"  class="programs_mini"exact-active-class="active-link">Programs</NuxtLink>
    </div>

    <div class="achivment">
        <NuxtLink to="/achivment"  class="achivment_mini"exact-active-class="active-link">Achivment</NuxtLink>
    </div>

    <div class="myguides">
        <NuxtLink to="/myguides"  class="myguides_mini"exact-active-class="active-link">MyGuides</NuxtLink>
    </div>

    <div class="settings">
        <NuxtLink to="/setting"  class="settings_mini"exact-active-class="active-link">Settings</NuxtLink>
    </div>

</div>
</template>

<style scoped lang="scss">
@use '~/assets/mixins' as *;
.divi{
    height: 100%;
    width: 100%;
    border-right: var(--border-right);
}


.home{
    height: calc(100%/6);;
    width: 100%;
    @include flex;
    border-right: var(--border-right);
    text-decoration: none;
    color: black;

}
.home_mini{
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--purple-background-color);
    @include flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: var(--purple-box-shadow);
    text-decoration: none;
    color: black;
}
.home_mini:hover{
    box-shadow: var(--purple-hover-box-shadow);
    background-color: var(--purple-hover-background-color);
    border: var(--border);
}


.game{
    height: calc(100%/6);;
    width: 100%;
    @include flex;
    border-right: var(--border-right);
    text-decoration: none;
    color: black;

}
.game_mini{
    text-decoration: none;
    color: black;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--blue-background-color);
    @include flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow:var(--blue-box-shadow);
}
.game_mini:hover{
     box-shadow: var(--blue-hover-box-shadow);
    background-color: var(--blue-hover-background-color);
    border: var(--border);
}


.programs{
    height: calc(100%/6);;
    width: 100%;
    @include flex;
    border-right: var(--border-right);
    text-decoration: none;
    color: black;

}
.programs_mini{
    text-decoration: none;
    color: black;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--red-background-color);
    @include flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: var(--red-box-shadow);
}
.programs_mini:hover{
    box-shadow: var(--red-hover-box-shadow);
    background-color: var(--red-hover-background-color);
    border: var(--border);
}


.achivment{
    height: calc(100%/6);;
    width: 100%;
    @include flex;
    border-right: var(--border-right);
    text-decoration: none;
    color: black;

}
.achivment_mini{
    text-decoration: none;
    color: black;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--yellow-background-color);
    @include flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: var(--yellow-box-shadow);
}
.achivment_mini:hover{
    box-shadow: var(--yellow-hover-box-shadow);
    background-color: var(--yellow-hover-background-color);
    border: var(--border);
}


.myguides{
    height: calc(100%/6);;
    width: 100%;
    @include flex;
    border-right: var(--border-right);
    text-decoration: none;
    color: black;

}
.myguides_mini{
    text-decoration: none;
    color: black;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--green-background-color);
    @include flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: var(--green-box-shadow);
}
.myguides_mini:hover{
    box-shadow: var(--green-hover-box-shadow);
    background-color: var(--green-hover-background-color);
    border: var(--border);
}


.settings{
    height: calc(100%/6);;
    width: 100%;
    @include flex;
    border-right: var(--border-right);
    text-decoration: none;
    color: black;

}
.settings_mini{
    text-decoration: none;
    color: black;
    border-radius: 10px;
    height: 70%;
    width: 90%;
    background-color: var(--blu-background-color);
    @include flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    box-shadow:var(--blu-box-shadow);
}
.settings_mini:hover{
    box-shadow: var(--blu-hover-box-shadow);
    background-color: var(--blu-hover-background-color);
    border: var(--border);
}
@media (max-width: 1000px){
    .divi{
        width: 100%;
        padding-bottom: 20px;
    }
    .home{
        border-right: 1px;
    }
    .home_mini{
        font-size: 13px;
        height: 60px;
        width: 50px;
    }

    .game{
        border-right: 1px;
    }
    .game_mini{
        font-size: 13px;
        height: 60px;
        width: 50px;
    }

    .programs{
        border-right: 1px;
    }
    .programs_mini{
        font-size: 10px;
        height: 60px;
        width: 50px;
    }

    .achivment{
        border-right: 1px;
    }
    .achivment_mini{
        font-size: 10px;
        height: 60px;
        width: 50px;
    }

    .myguides{
        border-right: 1px;
    }
    .myguides_mini{
        font-size: 10px;
        height: 60px;
        width: 50px;
    }

    .settings{
        border-right: 1px;
    }
    .settings_mini{
        font-size: 10px;
        height: 60px;
        width: 50px;
    }
}
</style>

<script>

</script>