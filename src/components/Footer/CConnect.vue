<template>
    <li class="mx-1">
        <a target="_blank" :href="props.link">
            <img
                :src="props.imgSrc"
                :alt="props.alt"
                class="w-5 h-5 opacity-100 transition-[all_300_ease] hover:opacity-50 hover:rotate-45" />
        </a>
    </li>
</template>

<script setup lang="ts">
import { ConnectProps } from "./interface";
const props = defineProps<ConnectProps>();
</script>

<style scoped></style>
