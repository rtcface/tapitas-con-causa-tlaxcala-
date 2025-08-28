import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://energy-template.vbartalis.dev",
  base: "",
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },
});
