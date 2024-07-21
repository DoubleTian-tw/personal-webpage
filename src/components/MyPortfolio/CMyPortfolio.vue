<template>
    <div id="myPortfolio" class="main-container gs-reveal dynamicData block text-center">
        <div class="mb-2.5">
            <h1>My Portfolio</h1>
        </div>
        <ul class="flex flex-wrap justify-center items-center p-0">
            <Classification v-for="(classification, index) in classifications" v-bind="classification" :key="index"
                @click="() => { handleCurrentClassification(classification) }" />
        </ul>
        <div class="portfolio grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
            <TransitionGroup name="portfolio">
                <Portfolio v-for="(portfolio, index) in filterPortfolio" v-bind="portfolio" :key="index" />
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Classification from "./CClassification.vue";
import Portfolio from "./CPortfolio.vue";
import { uniqBy } from "lodash-es";
import { classificationProps, portfolioProps } from "./interface";
import seniorProject from "@/assets/portfolio-senior-project.jpg";
import previewImage from "@/assets/portfolio-preview-image.jpg";
import chatgptIntro from "@/assets/portfolio-chatgpt-intro.jpg";
import workHelpingTool from "@/assets/portfolio-work-helping-tool.jpg";
import pokemonGym from "@/assets/portfolio-pokemonGym.jpg";

const portfolios = ref<portfolioProps[]>([
    {
        id: 1,
        classification: "Game",
        name: "老七佳部落導覽",
        src: seniorProject,
        link: "https://www.facebook.com/csdgohome",
        description: `<p>透過Unity引擎結合VR眼鏡，在遊戲世界中體驗當地寫實的老七佳部落</p>
        <p>專題取名回佳，用意希望族人可以多回家看看自己部落的美</p>
        <p>在團體中我擔任場景、特效製作、程式撰寫及VR設定</p>`,
    },
    {
        id: 2,
        classification: "Web",
        name: "個人網站",
        src: previewImage,
        link: "https://github.com/DoubleTian-tw/personal-webpage/tree/main",
        description: `<p>就是你現在看到的網頁，在About me的部分已經大致上簡單介紹</p>
        <p></p>
        `,
    },
    {
        id: 3,
        classification: "Slides",
        name: "ChatGPT的介紹簡報",
        src: chatgptIntro,
        link: "https://1drv.ms/p/s!AqpWpkjGJfWehgXQxjPbZuyio4SG?e=l5Ti0N",
        description: `<p>在2022年底時突然崛起的chatGPT顛覆整個世界的認知，
        越來越多話題都開始搭配著生成式AI所延伸</p>
        <p>為了讓同事們能夠更了解背景及應用原理，進行蒐集並透過簡報、實作的方式
        在會議上介紹給大家</p>`,
    },
    {
        id: 4,
        classification: "Tool",
        name: "方便辦公時的小工具",
        src: workHelpingTool,
        link: "https://github.com/DoubleTian-tw/Fujitec_SpecTool",
        description: `<p>第一支side project，其目的是解決每日重複性的操作，
        例如開啟、建立指定資料夾、操作excel等等，大幅縮短惱人不必要的人工操作</p>`,
    },
    {
        id: 5,
        classification: "Web",
        name: "Pokemon Gym",
        src: pokemonGym,
        link: "https://doubletian-tw.github.io/pokemon-Gym/",
        description: `<p>在玩Pokemon go時每次打道館都需要查相剋屬性，時在太麻煩又很難記住每一隻角色，到不如來做一個網頁來解決吧! 於是乎Pokemon Gym就誕生了!</p>`,
    },
]);

const classifications = computed<classificationProps[]>(() => {
    const allType: classificationProps[] = [{
        classification: "All"
    }]
    const uniqItems = uniqBy(portfolios.value, "classification").map((item) => {
        return {
            classification: item.classification,
        };
    })

    return allType.concat(uniqItems)
});
const currentClassification = ref(classifications.value[0]);
const handleCurrentClassification = (classification: classificationProps) => {
    currentClassification.value = classification;
}
const filterPortfolio = computed<portfolioProps[]>(() => {
    if (currentClassification.value.classification === "All") {
        return portfolios.value
    }
    return portfolios.value.filter((item) => item.classification === currentClassification.value.classification)
})
</script>

<style lang="scss" scoped>
.portfolio-enter-active,
.portfolio-leave-active {
    transition: all 0.5s ease-in-out;
}

.portfolio-enter-from,
.portfolio-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.portfolio-enter-to,
.portfolio-leave-from {
    opacity: 1;
    transform: translateX(0px);
}
</style>
