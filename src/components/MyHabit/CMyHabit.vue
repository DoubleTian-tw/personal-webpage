<template>
    <div id="myHabit" class="main-container flex flex-col justify-center items-center">
        <div class="gs-reveal">
            <h1>Habit</h1>
        </div>
        <div class="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
            <Card v-for="(habit, index) in habits" :key="index" v-bind="habit"></Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from "./CCard.vue";
import { ref } from "vue";
import { CardProps } from "./interface";
import imgDancing from "@/assets/myHabit-dancing.png";
import imgAOE from "@/assets/myHabit-aoe.png";
import imgRiding from "@/assets/myHabit-riding.png";
const habits = ref<CardProps[]>([
    {
        imgSrc: imgDancing,
        title: "dancing",
        content: `從高中至今已經跳舞10幾年，喜歡Hip hop
            dance也嘗試過許多舞風，在高中社團中跳Breaking，到Mix工作室學Hip
            hop, Locking，上了大學學了Waacking,
            Popping，現在最喜歡類似於Hip
            hop的Choreography，透過編排訴說音樂的故事真的很吸引人。<br><br>
            每一時期有著不同的嘗試，造就開放態度的觀點。
        `,
    },
    {
        imgSrc: imgAOE,
        title: "age of empire II",
        content: `又稱世紀帝國2，是一款經典的戰略遊戲，如果你聽過或玩過代表至少30歲囉...<br><br>
            在過去都要打指令叫出眼鏡蛇車的年代...到現在轉到Steam平台，
            十幾年過去經典依舊<br><br>
            最喜歡的文明是馬紮爾，上封建馬爆對方最好玩，非常適合新手打騷擾!<br><br>
            &lt;伐伐伐伐伐木工&gt;`,
    },
    {
        imgSrc: imgRiding,
        title: "Riding motorcycle",
        content: `喜歡機車的我，目前有一台Fazer 250和MMBCU
            158，喜歡跑山或長途旅行，2024年的願望是到日本租車旅遊，體驗最為安全的用路國家。<br><br>
            除此之外也喜歡觀察道路規劃，今年2023年第二次造訪日本，還是被行人天堂的用路環境給震驚，一定會有人行道可走，過馬路也不怕危險，那一周整整走了快80公里!<br><br>
            加油了! 台灣`,
    },
]);
</script>

<style lang="scss" scoped></style>
