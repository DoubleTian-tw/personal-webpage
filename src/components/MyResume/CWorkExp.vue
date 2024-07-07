<template>
    <div class="workExp flex justify-between py-5">
        <div class="detail text-left">
            <h4 class="mb-5 mt-0 font-normal">{{ props.jobTitle }}</h4>
            <div class="company">
                <a class="hyperLink" :href="props.link">
                    <img src="@/assets/icon-business.png" alt="business icon" />
                    <span>{{ props.companyName }}</span>
                </a>
            </div>
            <div class="location">
                <img src="@/assets/icon-location.png" alt="location icon" />
                <span>{{ props.location }}</span>
            </div>
        </div>
        <div class="times flex flex-col justify-end text-xs">
            <span
                class="text-right pb-2 fulltime tracking-[3px] text-[--workExp-colorGreen] bg-[--work Exp-bgGreen] rounded-[30px]">
                {{ props.isFulltime ? "FULLTIME" : "PARTTIME" }}
            </span>
            <div class="text-right calendar text-[--lightGrey]">
                <img src="@/assets/icon-calendar.png" alt="calendar icon" />
                <span>{{ props.durationDate }}</span>
            </div>
        </div>
    </div>
    <hr />
</template>

<script setup lang="ts">
import { ExpProps } from "./interface";
const props = defineProps<ExpProps>();
</script>

<style lang="scss" scoped>
img {
    @apply w-[10px] h-[10px];
    @apply mr-2 inline-block;
}
</style>
