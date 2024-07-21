<template>
    <li>
        <a class="scroll-link" :href="props.href">{{ props.title }}</a>
    </li>
</template>

<script setup lang="ts">
import { LinkProps } from "./interface";

const props = defineProps<LinkProps>();
</script>

<style scoped lang="scss">
a {
    @apply block opacity-50 hover:opacity-100 text-base transition-[opacity_300_ease-in-out] py-[10px] px-5 m-0 text-left;
    @apply lg:p-0 lg:mx-5;
    @apply max-lg:hover:pl-7 max-lg:hover:bg-[--lightGrey]
}
</style>
