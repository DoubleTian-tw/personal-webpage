<template>
    <!-- TODO: GPAS追加 -->
    <div id="myHome" class="relative w-full h-screen">
        <Header></Header>
        <NavBar></NavBar>
    </div>
    <main>
        <AboutMe></AboutMe>
        <MyPortfolio></MyPortfolio>
        <MyHabit></MyHabit>
        <MyResume></MyResume>
        <MyBlog></MyBlog>
    </main>
    <Footer></Footer>
    <Transition>
        <GoBack v-if="displayGoBackIcon"></GoBack>
    </Transition>
</template>

<script setup lang="ts">
import Header from "@/components/CHeader.vue";
import NavBar from "@/components/Navbar/CNavbar.vue";
import AboutMe from "@/components/AboutMe/CAboutMe.vue";
import MyPortfolio from "@/components/MyPortfolio/CMyPortfolio.vue";
import MyHabit from "@/components/MyHabit/CMyHabit.vue";
import MyResume from "@/components/MyResume/CMyResume.vue";
import MyBlog from "@/components/MyBlog/CMyBlog.vue";
import Footer from "@/components/Footer/CFooter.vue";
import GoBack from "@/components/CGoBack.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { throttle } from "lodash-es";

const scrollY = ref<number>(0);
const viewThirdHeight = computed<number>(() => window.innerHeight / 3)
const displayGoBackIcon = computed<boolean>(() => scrollY.value > viewThirdHeight.value)

onMounted(() => {
    window.addEventListener('scroll', scroller)
})

onUnmounted(() => {
    window.removeEventListener('scroll', scroller)
})
const scroller = throttle(() => {
    scrollY.value = window.scrollY
}, 300)


</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    @apply transition-all duration-150 ease-in-out;
}

.v-enter-from,
.v-leave-to {
    @apply translate-y-20 opacity-0;
}
</style>
