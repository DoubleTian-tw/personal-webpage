<template>
    <div
        id="myPortfolio"
        class="main-container gs-reveal dynamicData block text-center">
        <div class="mb-2.5">
            <h1>My Portfolio</h1>
        </div>
        <div class="classification w-full"></div>
        <div class="portfolio"></div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.classification {
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
    li {
        padding: 10px 20px;
        color: var(--lightGrey);
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            color: var(--lightGreen);
            text-shadow: 0 0 5px 1px grey;
        }
    }
}
</style>
