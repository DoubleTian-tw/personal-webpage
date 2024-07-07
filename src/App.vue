<script setup lang="ts">
import Header from "@/components/CHeader.vue";
import NavBar from "@/components/CNavbar.vue";
import AboutMe from "@/components/AboutMe/CAboutMe.vue";
import MyPortfolio from "@/components/MyPortfolio/CMyPortfolio.vue";
import MyHabit from "@/components/MyHabit/CMyHabit.vue";
import MyResume from "@/components/MyResume/CMyResume.vue";
import MyBlog from "@/components/MyBlog/CMyBlog.vue";
import Footer from "@/components/Footer/CFooter.vue";
</script>

<template>
    <!-- Header -->
    <div id="myHome" class="relative w-full h-screen">
        <Header></Header>
        <NavBar></NavBar>
        <AboutMe></AboutMe>
        <MyPortfolio></MyPortfolio>
        <MyHabit></MyHabit>
        <MyResume></MyResume>
        <MyBlog></MyBlog>
        <Footer></Footer>
    </div>
    <main></main>
</template>

<style lang="scss" scoped></style>
