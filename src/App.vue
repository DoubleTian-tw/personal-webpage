<script setup lang="ts">
import Header from "@/components/CHeader.vue";
import NavBar from "@/components/CNavbar.vue";
import AboutMe from "@/components/AboutMe/CAboutMe.vue";
import Portfolio from "@/components/CPortfolio.vue";
import MyHabit from "@/components/MyHabit/CMyHabit.vue";
import MyResume from "@/components/CMyResume.vue";
import MyBlog from "@/components/CMyBlog.vue";
</script>

<template>
    <!-- Header -->
    <div id="myHome" class="relative w-full h-screen">
        <Header></Header>
        <NavBar></NavBar>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <MyHabit></MyHabit>
        <MyResume></MyResume>
        <MyBlog></MyBlog>
    </div>
    <main></main>
</template>

<style lang="scss" scoped></style>
