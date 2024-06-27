<template>
    <div id="myResume" class="main-container">
        <div class="container-title gs-reveal">
            <h1>Resume</h1>
        </div>
        <div class="flex flex-wrap w-full">
            <div class="basis-[40%] gs-reveal gs-fromLeft">
                <img
                    class="w-full h-[65vh] object-cover"
                    src="@/assets/myResume-image.jpg"
                    alt="myResume image"
                    oncontextmenu="return false;" />
            </div>

            <div class="basis-[60%] pl-20 gs-reveal gs-fromRight">
                <div class="mb-12">
                    <h2 class="mt-0 mb-5 font-normal">Work Experience</h2>
                    <div class="workExp">
                        <div class="detail">
                            <h4>MES工程師</h4>
                            <div class="company">
                                <a
                                    class="hyperLink"
                                    href="https://www.tsecpv.com/zh-tw/">
                                    <span>
                                        <img
                                            src="@/assets/icon-business.png"
                                            alt="" />
                                    </span>
                                    <span>TSEC元晶, Inc</span>
                                </a>
                            </div>
                            <div class="location">
                                <span>
                                    <img
                                        src="@/assets/icon-location.png"
                                        alt="" />
                                </span>
                                <span>Hsinchu Hukou</span>
                            </div>
                        </div>
                        <div class="times">
                            <p><span class="fulltime">FULLTIME</span></p>
                            <p class="calendar">
                                <img src="@/assets/icon-calendar.png" alt="" />
                                <span>May 2022 - June 2023</span>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div class="workExp">
                        <div class="detail">
                            <h4>軟體工程師</h4>
                            <div>
                                <div>
                                    <a
                                        class="hyperLink"
                                        href="https://www.fujitec.com.tw/">
                                        <span>
                                            <img
                                                src="@/assets/icon-business.png"
                                                alt="" />
                                        </span>
                                        <span> FUJITEC富士達, Inc </span>
                                    </a>
                                </div>
                                <div>
                                    <span>
                                        <img
                                            src="@/assets/icon-location.png"
                                            alt="" />
                                    </span>
                                    <span> Hsinchu Hukou </span>
                                </div>
                            </div>
                        </div>
                        <div class="times">
                            <p><span class="fulltime">FULLTIME</span></p>
                            <p class="calendar">
                                <img src="@/assets/icon-calendar.png" alt="" />
                                <span>August 2018 - April 2022</span>
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>

                <div class="Exp-block">
                    <h2>Education</h2>
                    <div class="workExp">
                        <div class="detail">
                            <h4>資訊模擬與設計學系</h4>
                            <div>
                                <div>
                                    <a
                                        class="hyperLink"
                                        href="https://csd.kh.usc.edu.tw/">
                                        <span>
                                            <img
                                                src="@/assets/icon-business.png"
                                                alt="" />
                                        </span>
                                        <span> Shih Chien, University </span>
                                    </a>
                                </div>
                                <div>
                                    <span>
                                        <img
                                            src="@/assets/icon-location.png"
                                            alt="" />
                                    </span>
                                    <span> Kaohsiung Chisan </span>
                                </div>
                            </div>
                        </div>
                        <div class="times">
                            <p class="calendar">
                                <img src="@/assets/icon-calendar.png" alt="" />
                                <span>September 2014 - June 2018</span>
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let data = [
    {
        title: "MES工程師",
        company: "TSEC元晶, Inc",
        link: "https://www.tsecpv.com/zh-tw/",
        location: "Hsinchu Hukou",
        isFulltime: true,
        durationDate: "May 2022 - June 2023",
    },
    {
        title: "軟體工程師",
        company: "FUJITEC富士達, Inc",
        link: "https://www.fujitec.com.tw/",
        location: "Hsinchu Hukou",
        isFulltime: true,
        durationDate: "August 2018 - April 2022",
    },
    {
        title: "資訊模擬與設計學系",
        company: "Shih Chien, University",
        link: "https://csd.kh.usc.edu.tw/",
        location: "Kaohsiung Chisan",
        isFulltime: true,
        durationDate: "September 2014 - June 2018",
    },
];
console.log(`🍔 --> `, data);
</script>

<style lang="scss" scoped>
h4 {
    margin-bottom: 20px;
    margin-top: 0;
    font-weight: normal;
}
.workExp {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 20px 0;
    .times {
        text-align: right;
        .fulltime {
            margin-bottom: 15px;
            margin-top: 0;
            font-size: 0.8em;
            letter-spacing: 0.2em;
            color: var(--workExp-colorGreen);
            background-color: var(--workExp-bgGreen);
            padding: 5px 15px;
            border-radius: 30px;
        }
        p {
            margin: 0 0 20px 0;
        }
    }
    // .detail span,
    .calendar {
        margin: 0;
        font-size: 0.5em;
        color: var(--lightGrey);
    }
    .detail {
        div {
            // display: inline-block;
        }
        span {
            // padding-right: 10px;
        }
    }
    img {
        width: 10px;
        height: 10px;
    }
}
.company {
    a {
        display: flex;
    }
    img,
    span {
        padding-right: 10px;
    }
}
</style>
