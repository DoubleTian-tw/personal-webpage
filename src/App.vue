<template>
    <!-- TODO: GPAS追加 -->
    <div id="myHome" class="relative w-full h-screen">
        <Home></Home>
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
    <div ref="observerTarget" class="observer-target"></div>
    <Transition>
        <BackToHome v-if="displayGoBackIcon" />
    </Transition>
</template>

<script setup lang="ts">
import Home from "@/components/Home/index.vue";
import NavBar from "@/components/Navbar/index.vue";
import AboutMe from "@/components/AboutMe/index.vue";
import MyPortfolio from "@/components/MyPortfolio/index.vue";
import MyHabit from "@/components/MyHabit/CMyHabit.vue";
import MyResume from "@/components/MyResume/CMyResume.vue";
import MyBlog from "@/components/MyBlog/CMyBlog.vue";
import Footer from "@/components/Footer/CFooter.vue";
import BackToHome from "@/components/BackToHome/index.vue";
import { onMounted, onUnmounted, ref } from "vue";

const observerTarget = ref<HTMLElement | null>(null);
const displayGoBackIcon = ref(false);

// 創建 Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        // 當觀察點元素不可見時（滾動超過頁面1/3），顯示回到頂部按鈕
        displayGoBackIcon.value = !entries[0].isIntersecting;
    },
    {
        // 設置觀察點在視窗 1/3 處
        rootMargin: '33% 0px 0px 0px',
        threshold: 0
    }
);

onMounted(() => {
    if (observerTarget.value) {
        observer.observe(observerTarget.value);
    }
});

onUnmounted(() => {
    observer.disconnect();
});
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

.observer-target {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    pointer-events: none;
    opacity: 0;
}
</style>
