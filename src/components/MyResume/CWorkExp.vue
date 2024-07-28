<template>
    <div class="mb-5">
        <h4>{{ props.jobTitle }}</h4>
        <a class="cursor-pointer" :href="props.link">
            <div class="group flex mb-4 justify-between flex-row max-xs:flex-col">
                <div class="detail text-left max-sm:mb-4">
                    <div class="company">
                        <a class="hyperLink group-hover:after:left-0 group-hover:after:w-[95%]" href="">
                            <img src="@/assets/icon-business.png" alt="business icon" />
                            <span>{{ props.companyName }}</span>
                        </a>
                    </div>
                    <div class="location">
                        <img src="@/assets/icon-location.png" alt="location icon" />
                        <span>{{ props.location }}</span>
                    </div>
                </div>
                <div class="times text-right max-sm:text-left text-sm flex flex-col justify-end">
                    <span class="fulltime tracking-[3px] text-[--lightGreen] rounded-[30px]">
                        {{ props.isFulltime ? "FULLTIME" : "PARTTIME" }}
                    </span>
                    <div class="calendar text-[--lightGrey]">
                        <img src="@/assets/icon-calendar.png" alt="calendar icon" />
                        <span>{{ props.durationDate }}</span>
                    </div>
                </div>
            </div>
        </a>
        <hr />
    </div>

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
