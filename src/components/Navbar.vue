<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <a href="#myHome"> </a>
            </div>
            <div class="links-container">
                <ul class="links show-list-transition">
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
            <div class="toggle-button">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
nav {
    position: absolute;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: 25px 0;
}
.nav-container {
    position: relative;
}
.logo {
    position: absolute;
    background-image: url("../images/icon-cat.png");
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 50px;
    width: 1.7em;
    height: 1.7em;
    transition: all 0.5s ease;
    &:hover {
        transform: rotate(30deg) !important;
    }
}
.links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    flex-wrap: nowrap;
}

a {
    display: block;
    text-decoration: none;
    margin: 0 20px;
    color: white;
    opacity: 0.5;
    font-size: 1em;
}
a,
.toggle-button {
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
.toggle-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    display: none;
    margin: 0 50px;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
}
.bar {
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 5px 0;
}
</style>
