<template>
    <div class="gs-reveal gs-spin">
        <div
            class="hover:rotate-6 border border-solid border-[--lightGrey] rounded-md p-[30px] capitalize transition-all ease-in-out duration-300">
            <div class="flex flex-col justify-center items-center gap-4">
                <img class="w-20 h-20 rounded-full shadow-[0_0_10px_var(--lightGrey)] object-cover object-center"
                    :src="props.imgSrc" :alt="props.title" />
                <h3>{{ props.title }}</h3>
            </div>
            <div class="text-left" v-html="props.content"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CardProps } from "./interface";

const props = defineProps<CardProps>();
</script>

<style scoped lang="scss"></style>
