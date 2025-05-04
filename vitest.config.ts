import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: "jsdom",
        coverage: {
            provider: "v8",
            reporter: ["text", "lcov"],
            exclude: [
                "node_modules/**",
                "dist/**",
                "**/*.d.ts",
                "tests/**",
                "**/*.test.ts",
                "**/*.config.ts",
            ],
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(process.cwd(), "./src"),
        },
    },
});
