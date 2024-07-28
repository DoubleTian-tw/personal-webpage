<template>
    <div class="fixed bottom-[10%] right-[5%]">
        <a class="cursor-pointer" href="#myHome">
            <img class="w-8 h-auto" src="@/assets/icon-goBack.png" alt="go back icon"
                title="Click me to go home page." />
        </a>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
img {
    @apply animate-[breath_1s_ease_infinite];
}

@keyframes breath {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>
