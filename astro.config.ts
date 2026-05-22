// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "http://rozenkransmarathon.nl/",
  base: "/",

  // server: {
  //   host: true,
  //   port: 3000,
  // },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        mdi: ["*"],
      },
    }),
  ],
});
