// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import pageconfig from "./src/pageconfig.json";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: pageconfig.sitelocatie,

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
