<script setup lang="ts">
import CHeader from "@/components/CHeader.vue";
import CNavBar from "@/components/CNavbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import CPortfolio from "@/components/CPortfolio.vue";
import MyHabit from "@/components/MyHabit.vue";
import MyResume from "@/components/MyResume.vue";
import MyBlog from "@/components/MyBlog.vue";
</script>

<template>
    <!-- Header -->
    <div id="myHome" class="relative w-full h-screen">
        <CHeader></CHeader>
        <CNavBar></CNavBar>
        <AboutMe></AboutMe>
        <CPortfolio></CPortfolio>
        <MyHabit></MyHabit>
        <MyResume></MyResume>
        <MyBlog></MyBlog>
    </div>
    <main></main>
</template>

<style lang="scss" scoped></style>
