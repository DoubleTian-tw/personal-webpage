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
                    <WorkExp
                        v-for="(exp, index) in experiences"
                        v-bind="exp"
                        :key="index"></WorkExp>
                </div>

                <div class="mb-12">
                    <h2 class="mt-0 mb-5 font-normal">Education</h2>
                    <WorkExp
                        v-for="(edu, index) in educations"
                        v-bind="edu"
                        :key="index"></WorkExp>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WorkExp from "./CWorkExp.vue";
import { ExpProps } from "./interface";
const experiences = ref<ExpProps[]>([
    {
        jobTitle: "前端工程師",
        companyName: "iStaging, Inc",
        link: "https://www.istaging.com/",
        location: "Taipei Songshan",
        isFulltime: true,
        durationDate: "April 2024 - now",
    },
    {
        jobTitle: "MES工程師",
        companyName: "TSEC元晶, Inc",
        link: "https://www.tsecpv.com/zh-tw/",
        location: "Hsinchu Hukou",
        isFulltime: true,
        durationDate: "May 2022 - June 2023",
    },
    {
        jobTitle: "軟體工程師",
        companyName: "FUJITEC富士達, Inc",
        link: "https://www.fujitec.com.tw/",
        location: "Hsinchu Hukou",
        isFulltime: true,
        durationDate: "August 2018 - April 2022",
    },
]);
const educations = ref<ExpProps[]>([
    {
        jobTitle: "資訊模擬與設計學系",
        companyName: "Shih Chien, University",
        link: "https://csd.kh.usc.edu.tw/",
        location: "Kaohsiung Chisan",
        isFulltime: true,
        durationDate: "September 2014 - June 2018",
    },
]);
</script>

<style lang="scss" scoped></style>
