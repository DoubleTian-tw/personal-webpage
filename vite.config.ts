import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "@rollup/plugin-alias";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // alias({
        //     entries: [{ find: "@", replacement: "/src" }],
        // }),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
