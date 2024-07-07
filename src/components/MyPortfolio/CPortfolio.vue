<template>
    <div class="relative">
        <div
            class="overflow-hidden w-full rounded-[10px] shadow-[0_0_10px_var(--lightGrey)]">
            <a :href="props.link" target="_blank">
                <img :src="props.src" :alt="props.name" />
            </a>
        </div>
        <div class="description">
            <h4>{{ props.name }}</h4>
            <div>{{ props.description }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { portfolioProps } from "./interface";

const props = defineProps<portfolioProps>();
</script>

<style scoped></style>
