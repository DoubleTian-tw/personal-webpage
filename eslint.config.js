import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        extends: [
            "eslint:recommended",
            "plugin:vue/vue3-recommended",
            "plugin:@typescript-eslint/recommended",
        ],
        parser: "vue-eslint-parser",
        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".vue"],
            ecmaVersion: 2021,
        },
        plugins: ["vue", "@typescript-eslint"],
        rules: {
            // Your other ESLint rules
        },
    },
];
