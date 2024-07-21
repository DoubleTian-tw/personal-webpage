<template>
    <div class="relative group">
        <div class="overflow-hidden w-full rounded-[10px] shadow-[0_0_10px_var(--lightGrey)]">
            <a :href="props.link" target="_blank">
                <img :src="props.src" :alt="props.name"
                    class="block w-full object-cover scale-100 transition-transform duration-500 ease-in-out hover:scale-125" />
            </a>
        </div>
        <div
            class="description overflow-hidden h-0 w-full text-center absolute top-[95%] bg-[--bgGrey] group-hover:h-[auto] z-[998] rounded-b-xl shadow-[0_0_10px_var(--lightGrey)] transition-[--transition-all_300]">
            <h4 class="relative left-0 mx-3 my-2 createLine">
                {{ props.name }}
            </h4>
            <div v-html="props.description" class="text-left px-3 py-1 text-xs"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { portfolioProps } from "./interface";

const props = defineProps<portfolioProps>();
</script>

<style scoped lang="scss">
.createLine::after {
    @apply content-[''] absolute -bottom-[10%] left-1/2 w-0 h-[2px] bg-black transition-[all_800_ease];
}

.group:hover .createLine::after {
    @apply w-full left-0;
}
</style>
