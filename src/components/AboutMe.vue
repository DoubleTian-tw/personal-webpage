<template>
    <!-- About me -->
    <div id="myBio" class="main-container">
        <div class="myBio-img gs-fromLeft gs-reveal">
            <img
                src="@/assets/myBio-image.jpg"
                alt="This's me"
                oncontextmenu="return false;" />
        </div>
        <div class="myBio-intro">
            <div class="text gs-fromRight gs-reveal">
                <h2>About me</h2>
                <p>
                    嗨，我是田，稻田的田，因為喜歡從無到有的Coding過程，熱衷成為一名前端工作者。
                </p>
                <p>
                    過去是個平凡無奇喜歡跳舞的男子，在亞洲文化下求學只為了成績，上了大學也認真玩了<a
                        class="hyperLink"
                        href="https://youtu.be/qZGN5PD_24k?si=ygPXyn0L1R89LhAN&t=58"
                        >四年的社團</a
                    >，出了社會找了安穩的工作做了三年多，總覺得自己還是喜歡寫Code做一些有趣的事情，先是換了份半導體工作，雖然充滿挑戰但依然不是興趣所在，因緣際會下接觸到了網頁，才開啟了<a
                        class="hyperLink"
                        href="https://postimg.cc/WtVYykJd"
                        >我新的世界</a
                    >。
                </p>
                <p>
                    全職自學是過去不曾做過的決定，踏出舒適圈讓我感到恐懼但興奮，慶幸過去有好好<a
                        class="hyperLink"
                        href="https://postimg.cc/kBLfC6p3"
                        >理財</a
                    >，才能在沒有收入來源的情況下穩定成長。
                </p>
                <p>
                    這條道路真的不容易，越來越多人投身前端領域，競爭者也越多，不時總懷疑自己有沒有做錯決定，不過，回到最初想轉職的念頭，總能繼續堅持下去。在未來的我往為看現在的自己，肯定會為這個覺得感到驕傲，「你是左
                    ! You are right !」
                </p>
                <p>
                    現在學了基本的三大前端語言，也挑了React當作工作第一份入職框架，因為過去做過MES工程師，所以也會SQL語法對DB進行操作、也做過自動化桌面App、還用Excel
                    VBA把資料自動化整理。
                </p>
                <p>
                    大概就是這些經驗讓我覺得Coding很有趣，當然還有<a
                        class="hyperLink"
                        href="https://youtube.com/playlist?list=PLup9hQduf8T_Pkk3-Yso3KPt3kTbigHAT&si=AgRpeudz_YO6nXGw"
                        >大學專題</a
                    >，想當初1人建置場景、寫程式和設定VR眼鏡，而且我的電腦沒顯卡跑不動，還跑去跟同組同學借電腦來做，真的是很難忘的體驗...
                </p>
                <p>最後的最後，想認識或是Hire我都非常歡迎 !</p>
            </div>
            <div class="skill gs-fromLeft gs-reveal">
                <h2>Markup Language</h2>
                <p>HTML</p>
                <p>CSS</p>
            </div>
            <div class="skill gs-fromRight gs-reveal">
                <h2>Program Language</h2>
                <p>Javascript</p>
                <p>C#</p>
                <p>Visual Basic</p>
            </div>
            <div class="skill gs-fromRight gs-reveal">
                <h2>Framework</h2>
                <p>ReactJs</p>
            </div>

            <div class="button gs-fromLeft gs-reveal">
                <a
                    class="hireMe"
                    href="https://www.cakeresume.com/s--M7R7Mwc-flIMqXH79MizSw--/paddytian"
                    >HIRE ME</a
                >
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#myBio {
    display: flex;
    flex-wrap: wrap;
    height: auto;
}

.myBio-img {
    width: 60%;
    padding: 0 100px 0 20px;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
        object-position: 60% 100%;
    }
}
.myBio-intro {
    width: 40%;
    .text,
    .skill {
        padding-bottom: 30px;
    }
    .button a {
        display: inline-block;
        color: white;
        text-decoration: none;
        font-size: 1em;
        padding: 15px 30px;
        border-radius: 30px;
        margin-bottom: 10px;
        transition: background-color 0.3s ease;
    }
}
.hireMe {
    background-color: var(--lightGreen);

    &:hover {
        background-color: var(--darkGreen);
    }
    .cv {
        background-color: var(--darkGrey);
        &:hover {
            background-color: var(--lightGrey);
        }
    }
}
</style>
