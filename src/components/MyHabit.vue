<template>
    <div
        id="myHabit"
        class="main-container flex flex-col justify-center items-center text-center">
        <div class="container-title gs-reveal">
            <h1>Habit</h1>
        </div>
        <div class="flex flex-wrap flex-row">
            <div class="col gs-reveal gs-spin">
                <div class="content">
                    <div class="content-header">
                        <img src="@/assets/myHabit-dancing.png" alt="" />
                        <p>dancing</p>
                    </div>
                    <p>
                        從高中至今已經跳舞10幾年，喜歡Hip hop
                        dance也嘗試過許多舞風，在高中社團中跳Breaking，到Mix工作室學Hip
                        hop, Locking，上了大學學了Waacking,
                        Popping，現在最喜歡類似於Hip
                        hop的Choreography，透過編排訴說音樂的故事真的很吸引人。
                    </p>
                    <p>每一時期有著不同的嘗試，造就開放態度的觀點。</p>
                </div>
            </div>
            <div class="col gs-reveal gs-spin">
                <div class="content">
                    <div class="content-header">
                        <img src="@/assets/myHabit-aoe.png" alt="" />
                        <p>age of empire II</p>
                    </div>
                    <p>
                        又稱世紀帝國2，是一款經典的戰略遊戲，如果你聽過或玩過代表至少30歲囉...
                    </p>
                    <p>
                        在過去都要打指令叫出眼鏡蛇車的年代...到現在轉到Steam平台，
                        十幾年過去經典依舊
                    </p>
                    <p>
                        最喜歡的文明是馬紮爾，上封建馬爆對方最好玩，非常適合新手打騷擾!
                    </p>
                    <p>&lt;伐伐伐伐伐木工&gt;</p>
                </div>
            </div>
            <div class="col gs-reveal gs-spin">
                <div class="content">
                    <div class="content-header">
                        <img src="@/assets/myHabit-riding.png" alt="" />
                        <p>Riding motorcycle</p>
                    </div>
                    <p>
                        喜歡機車的我，目前有一台Fazer 250和MMBCU
                        158，喜歡跑山或長途旅行，2024年的願望是到日本租車旅遊，體驗最為安全的用路國家。
                    </p>
                    <p>
                        除此之外也喜歡觀察道路規劃，今年2023年第二次造訪日本，還是被行人天堂的用路環境給震驚，一定會有人行道可走，過馬路也不怕危險，那一周整整走了快80公里!
                    </p>
                    <p>加油了! 台灣</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.col {
    display: block;
    flex-basis: 33%;
    padding: 0 1.1em 4.5em 1.1em;
}
.content {
    border: 1px solid var(--lightGrey);
    border-radius: 5px;
    padding: 30px;
    text-transform: capitalize;
    transition: all 0.3s ease;
    p {
        text-align: left;
    }
    &:hover {
        transform: rotate(5deg);
    }
}
.content-header img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    box-shadow: 0 0 10px var(--lightGrey);
}
</style>
