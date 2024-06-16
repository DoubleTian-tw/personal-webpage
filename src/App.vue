<script setup lang="ts">
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Portfolio from "@/components/Portfolio.vue";
</script>

<template>
    <!-- Header -->
    <div id="myHome" class="relative w-full h-screen">
        <Header></Header>
        <Navbar></Navbar>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
    </div>
    <main></main>
</template>

<style lang="scss" scoped>
.main-container {
    padding: 100px 50px;
    margin: 0 auto;
    width: var(--breakpoint-lg);
}
</style>
