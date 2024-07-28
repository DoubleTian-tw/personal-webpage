<template>
    <div class="blog my-5">
        <a
            :href="props.link"
            class="flex flex-row justify-between items-center cursor-pointer group">
            <div class="text-left">
                <span class="text-style">{{ props.date }}</span>
                <h2 class="font-normal text-[--darkBlack] m-0 group-hover:text-[--lightGreen] transition-colors">
                    {{ props.title }}
                </h2>
            </div>
            <span class="text-style">{{ props.duration }}</span>
        </a>
    </div>
    <hr />
</template>

<script setup lang="ts">
import { ArticleProps } from "./interface";

const props = defineProps<ArticleProps>();
</script>

<style lang="scss" scoped>
.text-style {
    @apply text-[--lightGrey] text-[16px] tracking-[3px] uppercase;
}
</style>
