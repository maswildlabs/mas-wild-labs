// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import node from "@astrojs/node"; // Import the standard Node backend adapter

// https://astro.build/config
export default defineConfig({
  // Keep it as a dynamic server-rendered application
  output: "server",

  // Tell Astro to build an independent, self-hostable Node server
  adapter: node({
    mode: "standalone"
  }),

  integrations: [react(), markdoc(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },
});
