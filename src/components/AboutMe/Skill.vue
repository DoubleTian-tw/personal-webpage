<template>
    <div class="gs-fromLeft gs-reveal pb-7">
        <h2>{{ props.title }}</h2>
        <ul class="text-left list-disc ml-4">
            <li v-for="detail in props.details" class="my-4">
                {{ detail }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { SkillProps } from "./interface";

const props = defineProps<SkillProps>();
</script>

<style lang="scss" scoped></style>
