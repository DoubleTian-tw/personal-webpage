<template>
    <li class="mb-2 text-[--lightGrey] text-[14px]">
        <img :src="props.imgSrc" :alt="props.alt"
            class="w-5 h-5 opacity-100 transition-[all_300_ease] hover:opacity-50 hover:rotate-45 inline-block" />
        <span class="ml-2 inline-block">{{ props.content }}</span>
    </li>
</template>

<script setup lang="ts">
import { ContactProps } from "./interface";
const props = defineProps<ContactProps>();
</script>

<style scoped></style>
