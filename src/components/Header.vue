<template>
    <header>
        <div class="bg"></div>
        <div class="intro gs-absolute">
            <h1>
                I'm Paddy Tian <br />
                A Front-end developer
            </h1>
            <p>Nice to meet you</p>
        </div>
    </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
    position: relative;
}
.bg {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-image: url("@/assets/header-image.jpg");
}
.intro {
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>
