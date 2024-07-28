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
                linkColor: "var(--linkColor)",
                linkActiveColor: "var(--linkActiveColor)",
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
