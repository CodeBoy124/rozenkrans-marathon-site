// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import PAGECONFIG_JSON from "./src/pageconfig.json";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        ic: ["*"],
      },
    }),
  ],
});
