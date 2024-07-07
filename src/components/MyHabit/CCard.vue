<template>
    <div class="block basis-[33%] px-4 pb-20 gs-reveal gs-spin">
        <div
            class="content hover:rotate-6 text-left border border-solid border-[--lightGrey] rounded-md p-[30px] capitalize transition-all ease-in-out duration-300">
            <div class="content-header">
                <img
                    class="w-20 h-20 rounded-full shadow-[0_0_10px_var(--lightGrey)] object-cover object-center"
                    :src="props.imgSrc"
                    :alt="props.title" />
                <p class="text-left">{{ props.title }}</p>
            </div>
            <div v-html="props.content"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CardProps } from "./interface";

const props = defineProps<CardProps>();
</script>

<style scoped lang="scss"></style>
