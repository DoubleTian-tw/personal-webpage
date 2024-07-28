<template>
    <nav ref="navbar" class="navbar absolute translate-y-0 flex-wrap top-0 left-0 z-[1] w-full"
        :class="{ scrolled: beenScrolled, scrollBack: beenScrollBack, fixedNavbar: beenFixed }">
        <div class="relative py-6">
            <a href="#myHome">
                <img src="@/images/icon-cat.png"
                    class="mx-12 w-7 h-7 absolute transition-[--transition-all] hover:rotate-[30deg] max-lg:static">
            </a>
            <ul class="links" :class="{
                'active': displayLinks,
                'bg-white text-black': beenScrolled,
                'text-white': !beenScrolled,
            }">
                <Link v-for="link in links" :key="link.title" v-bind="link">
                </Link>
            </ul>
            <div class="toggle-button transition-opacity duration-300 ease-in-out absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer hidden max-lg:block mx-12 opacity-50 hover:opacity-100 "
                @click="() => { displayLinks = !displayLinks }">
                <div class="bar" :class="{ bgBlack: haveOverThirdVw }"></div>
                <div class="bar" :class="{ bgBlack: haveOverThirdVw }"></div>
                <div class="bar" :class="{ bgBlack: haveOverThirdVw }"></div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
import { LinkProps } from "./interface";
import Link from "./CLink.vue";
import { throttle } from "lodash-es";

const links = ref<LinkProps[]>([
    {
        title: "Home",
        href: "#myHome",
    },
    {
        title: "About",
        href: "#myBio",
    },
    {
        title: "Portfolio",
        href: "#myPortfolio",
    },
    {
        title: "Habit",
        href: "#myHabit",
    },
    {
        title: "Blog",
        href: "#myBlog",
    },
    {
        title: "Contact",
        href: "#myFooter",
    },
]);

const displayLinks = ref<boolean>(false);
const navbar = ref<HTMLElement | null>(null);
let navbarHeight = ref(0);
let beenScrolled = ref<boolean>(false);
let beenScrollBack = ref<boolean>(false);
let haveOverThirdVw: boolean = false;
let beenFixed = ref<boolean>(false);
let thirdVwHeight: number = window.innerHeight / 3;
let scrollPosition: number = 0;
let scrollOverNavbar: boolean = false;
let scrollOverThirdVw: boolean = false;
let betweenOverNavbarAndThirdVw: boolean = false;

onUpdated(() => {
    if (displayLinks.value && betweenOverNavbarAndThirdVw) {
        displayLinks.value = false
    }
})
onMounted(() => {
    getNavbarHeight();
    window.addEventListener('scroll', scrollControlNavbar)
})

onUnmounted(() => {
    window.removeEventListener('scroll', scrollControlNavbar)
})

const getNavbarHeight = () => {
    if (navbar.value) {
        navbarHeight.value = navbar.value.clientHeight;
    }
};
const scrollControlNavbar = throttle(() => {
    scrollPosition = window.scrollY;
    scrollOverNavbar = scrollPosition > navbarHeight.value;
    scrollOverThirdVw = scrollPosition > thirdVwHeight;
    betweenOverNavbarAndThirdVw = scrollOverNavbar && !scrollOverThirdVw;
    if (scrollOverNavbar !== beenFixed.value) {
        beenFixed.value = scrollOverNavbar;
    }
    if (scrollOverThirdVw !== beenScrolled.value) {
        beenScrolled.value = scrollOverThirdVw;
    }

    if (scrollOverThirdVw) {
        haveOverThirdVw = true;
        beenScrollBack.value = false;
    }

    if (haveOverThirdVw && betweenOverNavbarAndThirdVw) {
        beenScrollBack.value = true;
        haveOverThirdVw = false;
    }

    if (scrollOverNavbar === false) {
        beenScrollBack.value = false;
        haveOverThirdVw = false;
    }
}, 300)
</script>

<style lang="scss" scoped>
.active {
    opacity: 1;
}

.fixedNavbar {
    @apply fixed bg-white -translate-y-[110%] shadow-[0_0_10px_var(--lightGrey)]
}

.scrolled {
    @apply translate-y-0 transition-[--transition-all];
}

.scrollBack {
    @apply -translate-y-full transition-[--transition-all];
}

.bar {
    @apply w-[25px] h-[2px] bg-white my-[5px] mx-0;

    &.bgBlack {
        @apply bg-black
    }
}

.links {
    @apply w-full transition-all origin-top;
    @apply max-lg:absolute max-lg:scale-y-0 max-lg:overflow-hidden max-lg:top-full lg:flex lg:justify-center lg:items-center w-full transition-all origin-top;
    @apply lg:flex lg:justify-center lg:items-center w-full transition-all origin-top;

    &.active {
        @apply max-lg:scale-y-100;
    }
}
</style>
