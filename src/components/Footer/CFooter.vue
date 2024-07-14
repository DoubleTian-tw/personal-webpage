<template>
    <footer id="myFooter" class="block bg-[--bgGrey] px-[100px] py-[50px]">
        <div class="row">
            <div>
                <h4>Connect</h4>
                <ul class="flex flex-row p-0">
                    <Connect
                        v-for="(connect, index) in connects"
                        v-bind="connect"
                        :key="index"></Connect>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul class="flex flex-col text-left">
                    <Contact
                        v-for="(contact, index) in contacts"
                        :key="index"
                        v-bind="contact"></Contact>
                </ul>
            </div>
        </div>
        <div class="row">
            <p>
                Copyright © {{ getFullYear }}
                All rights reserved | This webpage is made by PaddyTian.
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { ConnectProps, ContactProps } from "./interface";
import icon_github from "@/assets/icon-socialMedia-github.png";
import icon_instagram from "@/assets/icon-socialMedia-instagram.png";
import icon_location from "@/assets/icon-location-black.png";
import icon_telephone from "@/assets/icon-telephone.png";
import icon_mail from "@/assets/icon-mail.png";
import Connect from "./CConnect.vue";
import Contact from "./CContact.vue";
const connects = ref<ConnectProps[]>([
    {
        link: "https://github.com/DoubleTian-tw",
        imgSrc: icon_github,
        alt: "github icon",
    },
    {
        link: "https://www.instagram.com/paddytian.tw/",
        imgSrc: icon_instagram,
        alt: "instagram icon",
    },
]);
const contacts = ref<ContactProps[]>([
    {
        imgSrc: icon_location,
        alt: "live location icon",
        content: "Zhubei City, Hsinchu County",
    },
    {
        imgSrc: icon_telephone,
        alt: "telephone icon",
        content: "email me!",
    },
    {
        imgSrc: icon_mail,
        alt: "email icon",
        content: "q135135x@gmail.com",
    },
]);
const getFullYear = computed(() => new Date().getFullYear());
</script>

<style scoped lang="scss">
.row {
    @apply flex flex-row justify-center gap-8;
}
</style>
