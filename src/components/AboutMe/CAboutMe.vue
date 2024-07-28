active<template>
    <!-- About me -->
    <div id="myBio" class="main-container max-lg:gap-0 gap-24 flex h-auto max-lg:flex-col">
        <div class="gs-fromLeft gs-reveal flex-1">
            <img class="w-full h-[80vh] max-lg:h-[50vh] object-cover object-center" src="@/assets/myBio-image.jpg"
                alt="This's me" oncontextmenu="return false;" />
        </div>
        <div class="flex-1">
            <div class="gs-fromRight gs-reveal pb-7">
                <h2>About me</h2>
                <div class="text-left" v-html="description.content"></div>
            </div>
            <div v-for="(skill, index) in skills" :key="index">
                <Skill :title="skill.title" :details="skill.details" />
            </div>

            <div class="gs-fromLeft gs-reveal text-left">
                <a class="bg-lightGreen hover:bg-darkGreen inline-block text-white no-underline py-4 px-7 rounded-[30px] mb-2.5 transition-[background-color] duration-300 ease"
                    href="https://www.cakeresume.com/s--M7R7Mwc-flIMqXH79MizSw--/paddytian">
                    HIRE ME
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Skill from "./CSkill.vue";
import { ref } from "vue";
import { SkillProps } from "./interface";
const skills = ref<SkillProps[]>([
    {
        title: "Markup Language",
        details: ["HTML", "CSS"],
    },

    {
        title: "Program Language",
        details: ["JavaScript", "TypeScript", "C#", "Visual Basic"],
    },

    {
        title: "Framework",
        details: ["React v18^", "Vue Option/Composition API", "Tailwind"],
    },
]);
const description = ref<{ content: string }>({
    content: `嗨，我是田，稻田的田，在2023年中自學前端並轉職成功。<br><br>
    過去是個喜歡跳舞的男子，在亞洲文化的薰陶下成為好成績就是好寶寶的產物，結果到了大學選科系時才探詢興趣，而單純喜歡玩遊戲就選了資訊模擬與設計系，對，很奇怪又很饒口，其實就是多媒體系，另外的原因就是不用再K書啦！<br><br>
    一路大學認真玩了四年<a class="hyperLink" href="https://youtu.be/qZGN5PD_24k?si=ygPXyn0L1R89LhAN&t=58">熱舞社</a>，一路當了社長、負責人再到辦成發，到了大三、四才在程式與設計之間做選擇，此時隱約知道前者比較有出路。不過，本科也並沒有程式課程只能自己學習，能力大概是看得懂語法且會copy and paste的能力 😎，不過也為轉職時的我埋下基礎。<br><br>
    出了社會後，在穩定的傳產待了三年多，發現工作重複又沒發展性，再加上我對會寫程式這能力還是有粉紅泡泡的幻想，能在鍵盤上飛舞著一堆錯綜復雜的英文好像很厲害。而經過一套傳統組合拳，「要有好的發展，就要找又大又好的公司啊！」，因此跑去光電廠工作，過程中充滿挑戰一路學習的不是寫程式，而是一套難以理解的商務邏輯，所以發展也不是太順利，卻奠定之後理解問題的能力。<br><br>
    在2023年初，因緣際會下接觸到了網頁這門領域，便開啟了<a class="hyperLink" href="https://postimg.cc/WtVYykJd">我的新視野</a>，原來做網頁可以這麼酷？在多方搜集資訊後決定裸辭自學，而這個決定非常不易，要兼顧錢錢與時間賽跑，否則中途而廢真的得不償失，這次的踏出舒適圈讓我感到恐懼卻興奮，覺得找到一份符合我理想的工作，慶幸過去有好好<a class="hyperLink" href="https://postimg.cc/kBLfC6p3">理財</a>，才能在沒有收入來源的情況下邁向目標。<br><br>
    這條道路真的不容易，越來越多人投身前端領域，競爭者也越多，不時總懷疑自己有沒有做錯決定，不過，回到最初想轉職的念頭，總能繼續堅持下去，最大的幫助莫過於伴侶的支持，以及保持閱讀的習慣。<br><br>
    現在我可以自信的說：「哈囉～我是一名喜歡心理學、成長型議題、教育的前端工程師」。座右銘是「利他」，只要能夠幫助到你的，我都很樂意聊聊！
`,
});
</script>

<style lang="scss" scoped></style>
