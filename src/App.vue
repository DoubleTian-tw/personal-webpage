<script setup lang="ts">
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
</script>

<template>
    <!-- Header -->
    <div id="myHome" class="header-container">
        <Header></Header>
        <Navbar></Navbar>
        <AboutMe></AboutMe>
    </div>
    <main></main>
</template>

<style scoped>
.header-container {
    position: relative;
    width: 100%;
    height: 100vh;
}
.main-container {
    padding: 100px 50px;
    margin: 0 auto;
    width: var(--breakpoint-lg);
}
</style>
