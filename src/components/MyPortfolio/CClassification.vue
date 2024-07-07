<template>
    <li
        class="filter-btn px-4 py-5 color-lightGrey cursor-pointer transition-300-all hover:color-lightGreen">
        {{ props.classification }}
    </li>
</template>

<script setup lang="ts">
import { classificationProps } from "./interface";

const props = defineProps<classificationProps>();
</script>

<style scoped></style>
