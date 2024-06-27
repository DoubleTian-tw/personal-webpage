<template>
    <nav class="navbar absolute flex-wrap top-0 left-0 z-[1] w-full py-6">
        <div class="relative">
            <div
                class="logo absolute mx-12 w-7 h-7 bg-[url('@/images/icon-cat.png')] bg-no-repeat bg-contain transition-all duration-500 ease hover:rotate-[30deg]">
                <a href="#myHome"> </a>
            </div>
            <div class="links-container">
                <ul
                    class="links show-list-transition flex justify-center items-center m-0 p-0 flex-nowrap">
                    <li>
                        <a class="active scroll-link" href="#myHome">Home</a>
                    </li>
                    <li><a class="scroll-link" href="#myBio">About</a></li>
                    <li>
                        <a class="scroll-link" href="#myPortfolio">Portfolio</a>
                    </li>
                    <li><a class="scroll-link" href="#myHabit">Habit</a></li>
                    <li><a class="scroll-link" href="#myResume">Resume</a></li>
                    <li><a class="scroll-link" href="#myBlog">Blog</a></li>
                    <li><a class="scroll-link" href="#myFooter">Contact</a></li>
                </ul>
            </div>
            <div
                class="toggle-button transition-opacity duration-300 ease-in-out absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer hidden mx-12 opacity-50 hover:opacity-100">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
a {
    display: block;
    margin: 0 20px;
    opacity: 0.5;
    font-size: 1em;
    color: white;
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}
.active {
    opacity: 1;
}
li:hover a {
    opacity: 1;
}
.bar {
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 5px 0;
}
</style>
