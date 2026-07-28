<script setup lang="ts">
</script>

<template>
    <div class="glav_cont">
        
        <div class="left">
            <LeftPanel />
        </div>

        <div class="right">
            <Header />
            <slot />   
            <Footer />
        </div>
        
    </div>
</template>