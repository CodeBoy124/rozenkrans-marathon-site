// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import PAGECONFIG_JSON from "./src/pageconfig.json";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: PAGECONFIG_JSON.site_url, // WARN: This can break in the future, if the field is renamed or removed

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
