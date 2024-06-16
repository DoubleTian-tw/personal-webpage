/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlack: "var(--darkBlack)",
                darkGrey: "var(--darkGrey)",
                lightGrey: "var(--lightGrey)",
                darkGreen: "var(--darkGreen)",
                lightGreen: "var(--lightGreen)",
                selectionBgColor: "var(--selectionBgColor)",
                linkColor: "var(--linkColor)",
                linkActiveColor: "var(--linkActiveColor)",
                workExp_colorGreen: "var(--workExp-colorGreen)",
                workExp_bgGreen: "var(--workExp-bgGreen)",
                bgGrey: "var(--bgGrey)",
            },
        },
        screens: {
            sm: "768px",
            lg: "992px",
        },
    },
    plugins: [],
};
