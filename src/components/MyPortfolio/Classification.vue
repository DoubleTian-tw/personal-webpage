<template>
    <li
        class="filter-btn px-4 py-5 text-[--lightGrey] cursor-pointer transition-[--transition-all] hover:text-[--lightGreen]">
        {{ props.classification }}
    </li>
</template>

<script setup lang="ts">
import { classificationProps } from "./interface";

const props = defineProps<classificationProps>();
</script>

<style scoped></style>
