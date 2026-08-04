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
    @include bigi2;
    border-right: var(--border-right);

}
.home_mini{
    @include mini2;
    background-color: var(--purple-background-color);
    box-shadow: var(--purple-box-shadow);
}
.home_mini:hover{
    box-shadow: var(--purple-hover-box-shadow);
    background-color: var(--purple-hover-background-color);
    border: var(--border);
}


.game{
    @include bigi2;
    border-right: var(--border-right);

}
.game_mini{
    @include mini2;
    background-color: var(--blue-background-color);
    box-shadow:var(--blue-box-shadow);
}
.game_mini:hover{
     box-shadow: var(--blue-hover-box-shadow);
    background-color: var(--blue-hover-background-color);
    border: var(--border);
}


.programs{
    @include bigi2;
    border-right: var(--border-right);

}
.programs_mini{
    @include mini2;
    background-color: var(--red-background-color);
    box-shadow: var(--red-box-shadow);
}
.programs_mini:hover{
    box-shadow: var(--red-hover-box-shadow);
    background-color: var(--red-hover-background-color);
    border: var(--border);
}


.achivment{
    @include bigi2;
    border-right: var(--border-right);

}
.achivment_mini{
    @include mini2;
    background-color: var(--yellow-background-color);
    box-shadow: var(--yellow-box-shadow);
}
.achivment_mini:hover{
    box-shadow: var(--yellow-hover-box-shadow);
    background-color: var(--yellow-hover-background-color);
    border: var(--border);
}


.myguides{
    @include bigi2;
    border-right: var(--border-right);

}
.myguides_mini{
    @include mini2;
    background-color: var(--green-background-color);
    box-shadow: var(--green-box-shadow);
}
.myguides_mini:hover{
    box-shadow: var(--green-hover-box-shadow);
    background-color: var(--green-hover-background-color);
    border: var(--border);
}


.settings{
    @include bigi2;
    border-right: var(--border-right);

}
.settings_mini{
    @include mini2;
    background-color: var(--blu-background-color);
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
        font-size: 13px !important;
        @include media-leftpanel;
    }

    .game{
        border-right: 1px;
    }
    .game_mini{
        font-size: 13px !important;
        @include media-leftpanel;
    }

    .programs{
        border-right: 1px;
    }
    .programs_mini{
        @include media-leftpanel;
    }

    .achivment{
        border-right: 1px;
    }
    .achivment_mini{
        @include media-leftpanel;
    }

    .myguides{
        border-right: 1px;
    }
    .myguides_mini{
        @include media-leftpanel;
    }

    .settings{
        border-right: 1px;
    }
    .settings_mini{
        @include media-leftpanel;
    }
}
</style>

<script>

</script>