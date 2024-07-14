<template>
    <a class="scroll-link goBack-link" href="#myHome">
        <img
            class="fixed bottom-[10%] right-[5%] w-8 h-auto cursor-pointer"
            src="@/assets/icon-goBack.png"
            alt="go back icon"
            title="Click me to go home page." />
    </a>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
img {
    animation-name: breath;
    animation-duration: 1s;
    animation-iteration-count: infinite;
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
