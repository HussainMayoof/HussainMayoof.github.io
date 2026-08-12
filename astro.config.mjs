// @ts-check
import {defineConfig} from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), markdoc(), ...(process.env.NODE_ENV !== "production" ? [keystatic()] : []),],

    vite: {
        plugins: [tailwindcss()],
        optimizeDeps: {
            include: ["@keystatic/core", "@keystatic/astro"],
        },
    },

    output: "static",

    site: "https://www.hussainmayoof.com",
});
